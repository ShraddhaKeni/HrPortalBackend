import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { CreateDepartmentDto } from './create-department.dto';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name?: string;

    status?: boolean;

    id: number;
}
