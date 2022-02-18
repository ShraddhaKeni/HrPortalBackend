import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from '../../auth/dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto, token?: string): Promise<User> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword, token: token });

    try {
      await this.save(user);
      return user;
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
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

  async findUserData(user_id: number): Promise<User> {
    return new Promise(resolve => {
      const user = this.findOne({
        where: {
          id: user_id
        }
      });
      resolve(user);
    });
  }

  async updateUserData(user_id: number, updateUserDto: UpdateUserDto): Promise<User> {
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