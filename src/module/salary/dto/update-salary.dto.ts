import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { CreateSalaryDto } from './create-salary.dto';

export class UpdateSalaryDto {

    @IsOptional()
    @IsString()
    emp_id: string;

    @IsNotEmpty()
    @Min(1000)
    salary: number;

    @IsString()
    status: boolean
}
