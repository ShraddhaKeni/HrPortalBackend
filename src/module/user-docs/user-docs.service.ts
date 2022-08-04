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

  findOne(id: string) {
    return this.userDocsRepository.findUserDocs(id)
  }

  update(id: string,doc_id:number, updateUserDocDto: UpdateUserDocDto) {
    return this.userDocsRepository.updateUserDoc(id, doc_id, updateUserDocDto)
  }

  remove(id: number){
    return this.userDocsRepository.deleteUserDoc(id)
  }

  upDateDoc(updateUserDocDto: UpdateUserDocDto) //fake post request to update document
  {
    return this.userDocsRepository.docUpdate(updateUserDocDto)
  }

}
