import { IsNumber, IsString } from "class-validator"

export class CreateApplicationTrackDto {

    @IsNumber()
    job_id: number

    @IsNumber()
    applicant_id: number

    @IsString()
    comment: string

    @IsString()
    emp_id: string

    @IsNumber()
    level: number

}
