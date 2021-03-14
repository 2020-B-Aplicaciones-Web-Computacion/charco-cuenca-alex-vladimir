import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {StudentEntity} from "./student.entity";
import {Repository} from "typeorm";

@Injectable()
export class StudentService{
  constructor(//Inyecta dependencias
    @InjectRepository(StudentEntity)
    public StudentEntity:Repository<StudentEntity>
  ) {
  }
}