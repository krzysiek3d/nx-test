import { Controller, Get, Logger } from '@nestjs/common';

import { Message } from '@nx-test/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    Logger.log('Get Hello DATA: ', Logger.getTimestamp());
    return this.appService.getData();
  }
}
