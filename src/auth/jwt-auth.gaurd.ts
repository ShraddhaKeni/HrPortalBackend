import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGaurd extends AuthGuard('jwt'){}