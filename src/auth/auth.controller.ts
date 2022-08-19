import { Body, Controller, Post, Response, HttpStatus,Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/module/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGaurd } from './jwt-auth.gaurd';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: CreateUserDto, @Response() res): Promise<void> {
    const data = await this.authService.signUp(authCredentialsDto);
     res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Success',
        body: [
            data,
        ]
    }); 
  }

  @Post('signin')
  async signIn(@Body() authCredentialsDto: AuthCredentialsDto, @Response() res) {
    const data = await this.authService.signIn(authCredentialsDto,res);
    
     res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Success',
        data
        
    });

  }


}