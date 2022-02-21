import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name: string;
}
