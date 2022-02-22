import { IsNotEmpty, IsNumber, IsString, Min, } from "class-validator"

export class CreateJobDto {

    @IsString()
    comp_id: string

    @IsNumber()
    dept_id: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsNumber()
    role_id: number

    @IsString()
    description: string

    @IsString()
    @IsNotEmpty()
    salary: string

    @IsNumber()
    raised_by_emp: string
}
