import { Body, Controller, Post,Response,HttpStatus } from "@nestjs/common";
import { response } from "express";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@Controller('auths')
export class AuthController
{
    constructor(private authService:AuthService){}
    @Post('signin')
    async signIn(@Body() authCreds:AuthCredentialsDto, @Response() res)
    {
        const authData = authCreds
        res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'Success',
            authData
            
        });
    }
}