import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsNull } from "typeorm";


export class offBoardDto {
    @IsString()
    emp_id: string;

    @IsString()
    @IsOptional()
    offBoard_date: string;

    @IsString()
    offBoard_reason:string;
}