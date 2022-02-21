import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDocDto } from './create-user-doc.dto';

export class UpdateUserDocDto extends PartialType(CreateUserDocDto) {}
