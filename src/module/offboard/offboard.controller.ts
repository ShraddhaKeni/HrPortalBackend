import { Controller,Post,Body,Param,Get,HttpStatus } from "@nestjs/common";
import { OffBoardService } from "./offboad.service";
import { offBoardDto } from "./dto/offboarddto.dto";


@Controller('offboard')
export class OffboardController{
    constructor(private readonly offboardService : OffBoardService){}

    @Post('create')
    async create(@Body() offBoardDto:offBoardDto){
        const data = await this.offboardService.create(offBoardDto)
        return {
            "statusCode": HttpStatus.CREATED,
            "message": "success",
            "data": data
          }
    }
    @Get('findAll')
    async getAll(){
        const data = await this.offboardService.getAll()
        return {
            "statusCode": HttpStatus.CREATED,
            "message": "success",
            "data": data
          }
    }

}


//