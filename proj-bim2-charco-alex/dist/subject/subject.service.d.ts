import { SubjectEntity } from "./subject.entity";
import { Repository } from "typeorm";
export declare class SubjectService {
    SubjectEntity: Repository<SubjectEntity>;
    constructor(SubjectEntity: Repository<SubjectEntity>);
}
