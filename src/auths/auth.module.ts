import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersRepository } from 'src/module/users/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports:[
        TypeOrmModule.forFeature([UsersRepository]),
    ],
   controllers:[AuthController],
   providers:[AuthService]
})
export class AuthsModule {}
