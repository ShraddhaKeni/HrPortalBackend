import { IsBoolean, IsString } from 'class-validator';

export class UpdateCountryDto {
    @IsString()
    name?: string;

    @IsBoolean()
    status: boolean;
}
