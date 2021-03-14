import { PetService } from "./pet.service";
import { PetEntity } from "./pet.entity";
export declare class petController {
    private _petService;
    constructor(_petService: PetService);
    list(request: any, response: any): Promise<void>;
    createPetView(response: any): void;
    createUser(params: any, response: any): Promise<void>;
    query(request: any): Promise<[PetEntity[], number]>;
    createPet(request: any, body: any): Promise<{
        nombre: any;
        breed: any;
    } & PetEntity>;
    getPets(): Promise<PetEntity[]>;
    createPetRest(body: any): Promise<{
        nombre: any;
        breed: string;
        fkUser: number;
    } & PetEntity>;
}
