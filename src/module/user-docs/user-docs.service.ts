import { Injectable } from '@nestjs/common';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';
import { UserDocsRepository } from './user-docs.repository';

@Injectable()
export class UserDocsService {

  constructor(private readonly userDocsRepository: UserDocsRepository) { }
  create(createUserDocDto: CreateUserDocDto) {
    return this.userDocsRepository.createUserDoc(createUserDocDto)
  }

  findAll() {
    return this.userDocsRepository.findAllDocs()
  }

  findOne(id: number) {
    return this.userDocsRepository.findUserDocs(id)
  }

  update(id: number, updateUserDocDto: UpdateUserDocDto) {
    return this.userDocsRepository.updateUserDoc(id, updateUserDocDto)
  }

}
