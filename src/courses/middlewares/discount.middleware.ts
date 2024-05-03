import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DiscountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.duracao = req.body.duracao * 0.5
    next();
  }
}
