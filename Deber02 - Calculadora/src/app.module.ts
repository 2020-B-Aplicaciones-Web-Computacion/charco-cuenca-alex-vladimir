import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import {userModule} from "./user/user.module";
import {petModule} from "./pet/pet.module";
import {calcModule} from "./calc/calc.module";


@Module({
  imports: [
      userModule,
      petModule,
      calcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
