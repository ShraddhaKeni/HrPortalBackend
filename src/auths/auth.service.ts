import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/module/users/users.repository";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService
{
    constructor(
        @InjectRepository(UsersRepository)
        private userRepository:UsersRepository
    )
    {}
    signIn()
    {

    }
}