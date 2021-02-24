import {Module} from "@nestjs/common"
import {calcController} from "./calc.controller";

//Decorador: funciones con @
@Module({
    imports:[//Modulos

    ],
    controllers:[//Controladores
        calcController
    ],
    providers:[//Servicios Declarados

    ],
    exports:[//Servicios Exportados

    ],
})

export class  calcModule{

}