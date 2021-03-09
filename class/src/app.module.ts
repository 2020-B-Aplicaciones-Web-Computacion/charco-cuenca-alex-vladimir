import { Module } from '@nestjs/common';

//Imports del App
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import {userModule} from "./user/user.module";
import {calcModule} from "./calc/calc.module";
import {petModule} from './pet/pet.module'

import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user/user.entity";
import {PetEntity} from "./pet/pet.entity";


@Module({
  imports: [
      TypeOrmModule.forRoot({
          name:"default",
          type:'mysql',
          port:3010,
          username:'epn',
          password:"epn12345678",
          database:'web',
          dropSchema:false,
          synchronize:true,
          entities:[
              UserEntity,
              PetEntity
          ]
        }
      ),
      userModule,
      petModule,
      calcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
