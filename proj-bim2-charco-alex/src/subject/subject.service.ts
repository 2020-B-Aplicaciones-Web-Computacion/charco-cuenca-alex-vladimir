import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {SubjectEntity} from "./subject.entity";
import {Repository} from "typeorm";

@Injectable()
export class SubjectService{
  constructor(//Inyecta dependencias
    @InjectRepository(SubjectEntity)
    public SubjectEntity:Repository<SubjectEntity>
  ) {
  }
}