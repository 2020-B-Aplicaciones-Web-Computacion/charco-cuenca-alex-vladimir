import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PetEntity} from "./pet.entity";
import {Repository} from "typeorm";

@Injectable()
export class PetService{
    constructor(//Inyecta dependencias
        @InjectRepository(PetEntity)
        public petEntity:Repository<PetEntity>
    ) {
    }
}