import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateLevelTypeDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name: string;
}
