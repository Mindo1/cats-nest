import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const dateTime = new Date();
    console.log(`${dateTime}| Request_At: ${req.url}`);
    next();
  }
}
