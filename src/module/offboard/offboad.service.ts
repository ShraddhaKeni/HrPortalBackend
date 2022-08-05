import { Injectable } from "@nestjs/common";
import { offBoardDto } from "./dto/offboarddto.dto";
import { OffBoardRepository } from "./offboard.repository";

@Injectable()
export class OffBoardService
{
    constructor(private offBoard:OffBoardRepository){}
     create(offBoardDto:offBoardDto)
        {
            return this.offBoard.createOffboard(offBoardDto);
        }
     getAll()
        {
            return this.offBoard.getData();
        }
}