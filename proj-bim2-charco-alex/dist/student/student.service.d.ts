import { StudentEntity } from "./student.entity";
import { Repository } from "typeorm";
export declare class StudentService {
    StudentEntity: Repository<StudentEntity>;
    constructor(StudentEntity: Repository<StudentEntity>);
}
