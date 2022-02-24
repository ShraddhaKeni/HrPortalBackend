import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateJobDto {

    @IsOptional()
    @IsString()
    comp_id?: string

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
    @IsNumber()
    raised_by_emp?: string

    @IsOptional()
    @IsBoolean()
    status?: boolean
}
