import { PartialType } from '@nestjs/mapped-types';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { CreateLevelTypeDto } from './create-level-type.dto';

export class UpdateLevelTypeDto extends PartialType(CreateLevelTypeDto) {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    name?: string;

    status?: boolean;
}
