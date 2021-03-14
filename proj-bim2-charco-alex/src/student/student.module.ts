import {Module} from "@nestjs/common"
import {StudentService} from './student.service'
import {SubjectModule} from '../subject/subject.module'
import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentEntity} from "./student.entity";
import {StudentController} from "./student.controller";

//Decorador: funciones con @
@Module({
  imports:[
    TypeOrmModule.forFeature(
      [StudentEntity],
      "default"//nombre de cadena de conexion
    ),
    SubjectModule

  ],
  controllers:[//Controladores
    StudentController
  ],
  providers:[//Servicios Declarados
    StudentService
  ],
  exports:[//Servicios Exportados
    StudentService
  ],
})

export class  studentModule{

}