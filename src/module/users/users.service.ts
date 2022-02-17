import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository,private readonly jwtService: JwtService) { }

  create(createUserDto: CreateUserDto) {
    const token = this.jwtService.sign(createUserDto);
    return this.userRepository.createUser(createUserDto, token)
  }

  findAll() {
    return this.userRepository.findAllUsers();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
