import { PetEntity } from "./pet.entity";
import { Repository } from "typeorm";
export declare class PetService {
    petEntity: Repository<PetEntity>;
    constructor(petEntity: Repository<PetEntity>);
}
