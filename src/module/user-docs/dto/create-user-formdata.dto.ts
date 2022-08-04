import { IsBoolean, IsInt, IsOptional,IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
export class CreateUserDocFormDataDto {

    @IsOptional()
    id:number;

    @IsNumber()
    @Type(()=>Number)
    doc_type_id: number;

    @IsString()
    @IsOptional()
    doc_path?: string;

    @IsString()
    user_id: string;

    @IsBoolean()
    @Type(()=>Boolean)
    status: boolean;
}