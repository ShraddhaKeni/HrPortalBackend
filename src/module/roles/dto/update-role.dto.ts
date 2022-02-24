import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsOptional()
    name?: string;

    status?: boolean;
}
