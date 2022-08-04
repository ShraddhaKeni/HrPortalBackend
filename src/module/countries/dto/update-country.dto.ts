import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsOptional()
    @IsBoolean()
    status: boolean;
}
