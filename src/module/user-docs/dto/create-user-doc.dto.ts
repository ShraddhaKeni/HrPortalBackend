import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDocDto {

    @IsNumber()
    doc_type_id: number;

    @IsString()
    @IsOptional()
    doc_path?: string;

    @IsString()
    user_id: string;

    @IsBoolean()
    status: boolean;

}
