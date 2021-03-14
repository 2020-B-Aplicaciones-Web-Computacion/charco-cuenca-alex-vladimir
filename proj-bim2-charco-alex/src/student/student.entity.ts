import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { SubjectEntity } from '../subject/subject.entity';

@Entity("student")
export class StudentEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column({
    type:"varchar",
    length:100,
    nullable:false,
    name:"nom_stud"
  })
  nom_stud:string

  @Column({
    type:"varchar",
    length:100,
    nullable:false,
    name:"ape_stud"
  })
  ape_stud:string

  @Column({
    type:"varchar",
    length:100,
    nullable:false,
    name:"gen_stud"
  })
  gen_stud:String

  @Column({
    type:"date",
    nullable:false,
    name:"fnac_Stud"
  })
  fnac_stud:Date

  @Column({
    type:"int",
    nullable:false,
    name:"subid_stud"
  })
  subid_stud:Number

  //ManytoOne
  @ManyToOne(
    type=>SubjectEntity,
    subject=>subject.students)
  fkSubject


}