import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { docFileFilter, editFileName } from 'src/utils/file-upload.utils';
import { CreateEmployeeFormDataDto } from './dto/create-employee-formdata.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('signature',{
        storage:diskStorage({
            destination:'./public/uploads/signatures',
            filename:editFileName
        }),
        fileFilter: docFileFilter
    })
)
  async create(@Body() createEmployeeFormDataDto: CreateEmployeeFormDataDto,@UploadedFile() file?:Express.Multer.File) {
    
    let createEMP = new CreateEmployeeFormDataDto()
    createEMP.name = createEmployeeFormDataDto.name;
    createEMP.comp_id = createEmployeeFormDataDto.comp_id;
    createEMP.user_id = createEmployeeFormDataDto.user_id;
    createEMP.desig_id = createEmployeeFormDataDto.desig_id;
    createEMP.dept_id = createEmployeeFormDataDto.dept_id;
    createEMP.email = createEmployeeFormDataDto.email;
    createEMP.status = createEmployeeFormDataDto.status;
    createEMP.doj = createEmployeeFormDataDto.doj;
    createEMP.emp_code = createEmployeeFormDataDto.emp_code;
    if(file.path!==null)
    {
      createEMP.signature = file.path
    }
    
    const data = await this.employeesService.create(createEMP);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.employeesService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.employeesService.findOne(id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const data = await this.employeesService.update(id, updateEmployeeDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Employee deleted successfully"
    }
  }


  @Post('update/:id')
  @UseInterceptors(
    FileInterceptor('signature',{
        storage:diskStorage({
            destination:'./public/uploads/signatures',
            filename:editFileName
        }),
        fileFilter: docFileFilter
    })
  )
async formUpdate(@Param('id') id:string,@Body() createEmployeeFormDataDto:CreateEmployeeFormDataDto,@UploadedFile() file?:Express.Multer.File)
  {
    let createEMP = new CreateEmployeeFormDataDto()
    createEMP.name = createEmployeeFormDataDto.name;
    createEMP.comp_id = createEmployeeFormDataDto.comp_id;
    createEMP.user_id = createEmployeeFormDataDto.user_id;
    createEMP.desig_id = createEmployeeFormDataDto.desig_id;
    createEMP.dept_id = createEmployeeFormDataDto.dept_id;
    createEMP.email = createEmployeeFormDataDto.email;
    createEMP.status = createEmployeeFormDataDto.status;
    createEMP.doj = createEmployeeFormDataDto.doj;
    createEMP.emp_code = createEmployeeFormDataDto.emp_code;
    if(file.path!==null)
    {
      createEMP.signature = file.path
    }
    

      const data = await this.employeesService.updateForm(id,createEMP)
      return{
        "statusCode":HttpStatus.OK,
        "message": "success",
        "data": data
      }
  }



}


