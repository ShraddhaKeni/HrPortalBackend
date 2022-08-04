import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";

export class UpdateCityDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    state_id?: number;

    @IsBoolean()
    @IsOptional()
    status: boolean;
}
