import {
  BadRequestException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AppCustomFilterException } from './app.exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AppCustomFilterException)
  getHello(): string {
    throw new BadRequestException();
    return this.appService.getHello();
  }

  @Get(':id')
  getAllHello(): string {
    throw new BadRequestException();
    return this.appService.getHello();
  }
}
