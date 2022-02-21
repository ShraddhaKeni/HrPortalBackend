import { Type } from 'class-transformer';
import { IsString, MinLength, MaxLength, Matches, IsBoolean, IsInt, IsEmail, IsDate } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password?: string;

    @IsInt()
    role_id?: number;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    contact_no?: string;

    @IsEmail()
    email?: string;

    @Type(() => Date)
    @IsDate()
    dob?: string;

    @IsString()
    profile_pic?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emergency_no1?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emergency_no2?: string;

    @IsString()
    token?: string;

    @IsBoolean()
    status: boolean;

    @IsString()
    emp_id?: string;
}
