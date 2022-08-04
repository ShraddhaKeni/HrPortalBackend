import { IsOptional, IsString } from 'class-validator';

export class UpdateDesignationDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    status?: boolean;   
}
