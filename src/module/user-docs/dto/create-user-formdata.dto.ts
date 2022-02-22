import { IsString } from "class-validator";

export class CreateUserFormDataDto {

    @IsString()
    doc_type_id: string;

    @IsString()
    user_id: string;

    @IsString()
    status: string;

}