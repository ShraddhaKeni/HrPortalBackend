import { Injectable } from '@nestjs/common';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';

@Injectable()
export class UserDocsService {
  create(createUserDocDto: CreateUserDocDto) {
    return 'This action adds a new userDoc';
  }

  findAll() {
    return `This action returns all userDocs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDoc`;
  }

  update(id: number, updateUserDocDto: UpdateUserDocDto) {
    return `This action updates a #${id} userDoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDoc`;
  }
}
