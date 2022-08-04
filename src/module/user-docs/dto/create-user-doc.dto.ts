import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDocDto {

    @IsOptional()
    @Type(()=>Number)
    id:number;

    @IsNumber()
    @Type(()=>Number)
    doc_type_id: number;

    @IsString()
    @IsOptional()
    doc_path?: string;

    @IsString()
    @IsOptional()
    path?:string;

    @IsString()
    user_id: string;

    @IsBoolean()
    @Type(()=>Boolean)
    status: boolean;

}
