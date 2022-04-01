import { Controller, Post } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}

    @Post('signUP')
    signup() {
        return  this.AuthService.signUP;
    }

    @Post('signIN')
    sigin() {
        return  this.AuthService.signIN;
    }

}