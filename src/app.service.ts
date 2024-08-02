import { BadRequestException, Injectable } from '@nestjs/common';
import { AppException } from './app.exception';

@Injectable()
export class AppService {
  getHello(): string {
    // throw new BadRequestException({
    //   status: 400,
    //   error: 'Bad request exception!',
    // });

    // throw new AppException();
    return 'Hello world!';
  }
}
