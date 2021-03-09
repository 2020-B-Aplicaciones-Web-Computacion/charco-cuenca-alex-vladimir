import {Module} from "@nestjs/common"
import {PetService} from './pet.service'
import {TypeOrmModule} from "@nestjs/typeorm";
import {PetEntity} from "./pet.entity";
import {petController} from "./pet.controller";
//Decorador: funciones con @
@Module({
    imports:[
        TypeOrmModule.forFeature(
            [PetEntity],
            "default"//nombre de cadena de conexion
        )

    ],
    controllers:[//Controladores
        petController
    ],
    providers:[//Servicios Declarados
        PetService
    ],
    exports:[//Servicios Exportados
        PetService
    ],
})

export class  petModule{

}