import {Module} from "@nestjs/common"
import {SubjectService} from './subject.service'
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubjectEntity} from "./subject.entity";
import {SubjectController} from "./subject.controller";

//Decorador: funciones con @
@Module({
  imports:[
    TypeOrmModule.forFeature(
      [SubjectEntity],
      "default"//nombre de cadena de conexion
    )

  ],
  controllers:[//Controladores
    SubjectController
  ],
  providers:[//Servicios Declarados
    SubjectService,

  ],
  exports:[//Servicios Exportados
  SubjectService
    ],
})

export class  SubjectModule{

}