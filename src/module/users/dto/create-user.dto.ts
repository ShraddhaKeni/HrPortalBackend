import { Type } from "class-transformer";
import { IsDate, IsEmail, IsInt, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
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
    profile_pic?: string;
}
