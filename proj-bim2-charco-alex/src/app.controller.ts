import {BadRequestException, Controller, ForbiddenException, Get, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("")
  index(
    @Res() response
  ){
    response.render("index");

  }
  }
