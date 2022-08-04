import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateJobDto {


    @IsOptional()
    @IsNumber()
    dept_id?: number

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string

    @IsOptional()
    @IsNumber()
    role_id?: number

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    salary?: string

    @IsOptional()
    @IsString()
    raised_by_emp?: string

    @IsOptional()
    @IsBoolean()
    status?: boolean
}
