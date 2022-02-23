import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/jwt-payload.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository,private readonly jwtService: JwtService) { }

  create(createUserDto: CreateUserDto) {
    const userD: JwtPayload = createUserDto;
    const token = this.jwtService.sign({userD});
    return this.userRepository.createUser(createUserDto, token);
  }

  findAll() {
    return this.userRepository.findAllUsers();
  }

  findOne(id: string) {
    return this.userRepository.findUserData(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateUserData(id,updateUserDto);
  }
}
