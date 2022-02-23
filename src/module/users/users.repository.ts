import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserData: CreateUserDto, token?: string): Promise<User> {
    // const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserData.password, salt);
    createUserData.password = hashedPassword

    // const user = this.create({ username, password: hashedPassword, token: token });
    const user = this.create(createUserData);

    try {
      await this.save(user);
      return user;
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException(error.detail);
      } else {
        throw new InternalServerErrorException();
      }
    }
  }


  async findAllUsers(): Promise<User[]> {
    return new Promise(resolve => {
      const users = this.find();
      resolve(users)
    });
  }

  async findUserData(user_id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const user = this.findOne(user_id);
      user.then(resp => {
        if (resp) {
          resolve(user);
        } else {
          reject(new HttpException('User not found', HttpStatus.NOT_FOUND));
        }
      });
    });
  }

  async updateUserData(user_id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return new Promise(resolve => {
      this.update(user_id, updateUserDto).then(
        resp => {
          const user = this.findOne({
            where: {
              id: user_id
            }
          });
          resolve(user);
        });
    });
  }
}
