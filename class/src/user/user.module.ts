import {Module} from "@nestjs/common"
import {userController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";

//Decorador: funciones con @
@Module({
        imports:[//Modulos
            TypeOrmModule.forFeature(
                [UserEntity],
                "default"
            )
        ],
        controllers:[//Controladores
            userController
        ],
        providers:[//Servicios Declarados
     ],
        exports:[//Servicios Exportados

        ],
})

export class  userModule{

}