import { HttpException, HttpStatus } from '@nestjs/common';

export class AppException extends HttpException {
  constructor() {
    super('Custome bad request exception!', HttpStatus.BAD_REQUEST);
  }
}
