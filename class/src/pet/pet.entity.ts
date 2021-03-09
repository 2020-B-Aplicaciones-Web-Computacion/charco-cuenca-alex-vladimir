import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {UserEntity} from "../user/user.entity";

@Entity("epn_pet")
export class PetEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:"varchar",
        length:100,
        nullable:false,
        name:"pet_name"
    })
    nombre:string

    @Column({
        type:"varchar",
        length:100,
        nullable:false,
        name:"pet_breed"
    })
    breed:string

    //ManyToOne (Hijo)
    @ManyToOne(
        type=>UserEntity,
        user=>user.pets
    )fkUser:Number
    //)fkUser:UserEntity
}