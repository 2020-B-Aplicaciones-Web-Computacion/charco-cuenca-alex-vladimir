import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
export declare class UserService {
    userEntity: Repository<UserEntity>;
    constructor(userEntity: Repository<UserEntity>);
}
