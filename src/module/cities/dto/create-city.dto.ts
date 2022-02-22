import { IsInt, IsString } from "class-validator";

export class CreateCityDto {
    @IsString()
    name: string;

    @IsInt()
    state_id: number;
}
