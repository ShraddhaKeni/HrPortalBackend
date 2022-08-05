import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffBoardService } from "./offboad.service";
import { OffboardController } from "./offboard.controller";
import { OffBoardRepository } from "./offboard.repository";

@Module({
    controllers:[OffboardController],
    providers:[OffBoardService],
    imports:[
        TypeOrmModule.forFeature([OffBoardRepository])
    ],
})

export class OffboardModule{}