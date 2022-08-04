import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class UpdateUserDocDto {

    @IsOptional()
    @Type(()=>Number)
    id?:number;

    @IsOptional()
    @IsNumber()
    @Type(()=>Number)
    doc_type_id?: number;

    @IsOptional()
    @IsString()
    @Type(()=>String)
    doc_path?: string;

    @IsOptional()
    @IsString()
    @Type(()=>String)
    user_id?: string;

    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    status?: boolean;
}
