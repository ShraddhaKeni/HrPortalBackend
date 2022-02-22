import { Type } from 'class-transformer';
import { IsString, MinLength, MaxLength, Matches, IsBoolean, IsInt, IsEmail, IsDate, IsOptional } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    @IsOptional()
    password?: string;

    @IsInt()
    @IsOptional()
    role_id?: number;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsOptional()
    contact_no?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    dob?: string;

    @IsString()
    @IsOptional()
    profile_pic?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsOptional()
    emergency_no1?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsOptional()
    emergency_no2?: string;

    @IsString()
    @IsOptional()
    token?: string;

    @IsBoolean()
    status: boolean;

    @IsString()
    @IsOptional()
    emp_id?: string;
}
