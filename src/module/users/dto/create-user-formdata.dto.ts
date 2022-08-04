import { Type } from "class-transformer";
import { IsDate, IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength,IsInt } from "class-validator";

export class CreateUserFormDataDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password: string;

    @IsInt()
    role_id: number;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    contact_no: string;

    @IsEmail()
    email: string;

    @Type(() => Date)
    @IsDate()
    dob: string;

    @IsString()
    @IsOptional()
    profile_pic?: string;
}