import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from '../module/users/users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { User } from 'src/module/users/entities/user.entity';
import { CreateUserDto } from 'src/module/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/module/users/dto/update-user.dto';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,

  ) {}
    
  async signUp(authCredentialsDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto,res): Promise<{ accessToken: string }> {
    
    const { username, password} = authCredentialsDto;
    const user = await this.usersRepository.findOne({ username });
   let id = user.id;
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = {username,id};
      const accessToken = await this.jwtService.signAsync({payload});
      const data = this.usersRepository.update({username:username},{token:accessToken,updatedAt:new Date()}).then(response=>{
        if(response)
        {
          
          res.cookie('jwt',accessToken,{httpOnly:true})

          
          return {accessToken,role:user.role_id}

        }
        throw new UnauthorizedException('Cannot Update Token');
      })
      return data;
     
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
  
}

