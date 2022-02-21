import { IsInt, IsString } from "class-validator";

export class CreateStateDto {
    @IsString()
    name: string;

    @IsInt()
    country_id: number;
}
