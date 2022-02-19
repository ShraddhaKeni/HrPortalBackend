import { IsString, MinLength, MaxLength, Matches, IsBoolean } from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password?: string;

    @IsString()
    token?: string;

    @IsBoolean()
    status: boolean
}
