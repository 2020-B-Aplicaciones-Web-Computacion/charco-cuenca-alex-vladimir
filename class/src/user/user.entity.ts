import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {PetEntity} from "../pet/pet.entity";

@Entity("epn_user")
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({
        type:"varchar",
        length:100,
        nullable:false,
        name:"user_name"
    })
    nombre:string

    @Column({
        type:"varchar",
        length:100,
        nullable:false,
        name:"user_surname"
    })
    surname:string

    //OneToMany (Papa)
    @OneToMany(
        type => PetEntity,
        pet=>pet.fkUser
    )pets:PetEntity[];

}