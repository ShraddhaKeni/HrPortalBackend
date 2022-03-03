import { BadRequestException } from "@nestjs/common";
import { NextFunction } from "express";

export function GlobalMiddleware(req: Request, res: Response, next: NextFunction) {
    let reqhdr:any = req.headers;
    console.log(`Request... ${JSON.stringify(reqhdr)}`);
    console.log(`Request url ${req.url}`);
    if(req.url.indexOf('users/signup') > 0) {
        console.log('User Sign Up');
        next();
    } else {
        if(reqhdr.token != '' && reqhdr.token != null) {
            console.log(`Token: ${reqhdr.token}`);
            next();
        } else {
            next(new BadRequestException('Invalid Request'));
        }
    }
}