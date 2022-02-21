import { IsString, IsInt, IsBoolean } from "class-validator";

export class UpdateStateDto {

    @IsString()
    name?: string;

    @IsInt()
    country_id?: number;
    
    @IsBoolean()
    status: boolean;
}
