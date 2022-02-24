import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateUserDocDto {

    @IsOptional()
    @IsNumber()
    doc_type_id?: number;

    @IsOptional()
    @IsString()
    doc_path?: string;

    @IsOptional()
    @IsString()
    user_id?: string;

    @IsOptional()
    @IsBoolean()
    status?: boolean;
}
