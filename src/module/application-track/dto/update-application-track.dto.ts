import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateApplicationTrackDto {

    @IsOptional()
    @IsNumber()
    job_id?: number

    @IsOptional()
    @IsNumber()
    applicant_id?: number

    @IsOptional()
    @IsString()
    comment?: string

    @IsOptional()
    @IsString()
    emp_id?: string

    @IsOptional()
    @IsNumber()
    level?: number

    @IsOptional()
    @IsBoolean()
    status?: boolean
}
