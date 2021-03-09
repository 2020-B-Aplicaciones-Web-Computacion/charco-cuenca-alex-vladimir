import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserService{
    constructor(//Inyecta dependencias
        @InjectRepository(UserEntity)
        public userEntity:Repository<UserEntity>
    ) {
    }

}