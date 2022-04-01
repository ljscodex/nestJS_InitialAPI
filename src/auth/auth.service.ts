import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    test(){};

    signUP() {
        msg: 'Signed UP'
    };

    signIN() {
        msg: 'Signed IN'
    };

}

const service = new AuthService()
