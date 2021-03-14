import { Module } from '@nestjs/common';

//Imports del App
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modulos
import {studentModule} from "./student/student.module"
import {SubjectModule} from "./subject/subject.module"


import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentEntity} from "./student/student.entity"
import {SubjectEntity} from "./subject/subject.entity"



@Module({
  imports: [
      TypeOrmModule.forRoot({
          name:"default",
          type:'mysql',
          port:3010,
          username:'charcoa',
          password:"charcoa123",
          database:'proj-web',
          dropSchema:false,
          synchronize:true,
          entities:[
              StudentEntity,
            SubjectEntity
          ]
        }
      ),
      studentModule,
      SubjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
