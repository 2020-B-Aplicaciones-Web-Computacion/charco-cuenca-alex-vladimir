import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import {calcModule} from "./calc/calc.module";


@Module({
  imports: [
      calcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
