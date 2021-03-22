import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Min} from "class-validator";
import { StudentEntity } from '../student/student.entity';


@Entity("subject")
export class SubjectEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column({
    type:"varchar",
    length:100,
    nullable:false,
    name:"sub_name"
  })
  sub_name:string

  @Column({
    type:"varchar",
    length:7,
    nullable:false,
    unique:true,
    name:"sub_cod"
  })
  sub_cod:string

  @Column({
    type:"date",
    nullable:false,
    name:"sub_fstart"
  })
  sub_fstart:Date


  @Column({
    type:"date",
    nullable:false,
    name:"sub_fend"
  })
  sub_fend:Date

  @Column({
    type:"int",
    nullable:false,
    name:"sub_cupo"
  })
  @Min(0)
  sub_cupo:Number

  //One toMany
  @OneToMany(
    type=>StudentEntity,//Clase entidad
    student=>student.fkSubject)
  students:StudentEntity[]

}