import { IsString, IsInt, IsBoolean, IsOptional } from "class-validator";

export class UpdateStateDto {

    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    country_id?: number;
    
    @IsBoolean()
    status: boolean;
}
