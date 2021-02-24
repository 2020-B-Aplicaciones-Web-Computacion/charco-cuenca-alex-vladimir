import {Module} from "@nestjs/common"
import {userController} from "./user.controller";

//Decorador: funciones con @
@Module({
        imports:[//Modulos

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