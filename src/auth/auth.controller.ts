import { Body, Controller, Post, Response, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/module/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: CreateUserDto, @Response() res): Promise<void> {
    const data = await this.authService.signUp(authCredentialsDto);
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Success',
        body: [
            data,
        ]
    });
  }

  @Post('/signin')
  async signIn(@Body() authCredentialsDto: AuthCredentialsDto, @Response() res): Promise<{ accessToken: string }> {
    const data = await this.authService.signIn(authCredentialsDto);
    return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Success',
        body: [
            data,
        ]
    });

  }
}