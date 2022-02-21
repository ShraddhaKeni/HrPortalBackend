import { IsBoolean, IsInt, IsString } from "class-validator";

export class UpdateCityDto {
    @IsString()
    name?: string;

    @IsInt()
    state_id?: number;

    @IsBoolean()
    status: boolean;
}
