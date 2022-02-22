import { IsOptional, IsString } from "class-validator";

export class CreateUserDocFormDataDto {

    @IsString()
    doc_type_id: string;

    @IsString()
    @IsOptional()
    doc_path?: string;

    @IsString()
    user_id: string;

    @IsString()
    status: string;

}