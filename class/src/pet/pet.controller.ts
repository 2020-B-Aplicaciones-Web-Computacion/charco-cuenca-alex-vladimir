import {Body, Controller, Get, Header, HttpCode, Param, Post, Req, Res} from "@nestjs/common";
import {PetService} from "./pet.service";
import {FindConditions} from "typeorm";
import {PetEntity} from "./pet.entity";

//Directorio URL del Controlador
@Controller("pets")
export class petController{

    constructor(//Inyectando Dependencia de (Servicios)
        private _petService:PetService
    ) {

    }
    @Get("list")
    async list(
        @Req() request
        ,@Res() response
    ){
        let take=10;
        let skip=0;
        let order="ASC";
        if(request.query.skip){
            skip=request.query.skip;
        }
        if(request.query.take){
            take=request.query.take;
        }
        if(request.query.order){
            order=request.query.order;
        }

        let data= await this._petService.petEntity.findAndCount({
            take:take,
            skip:skip,
            order:{
                id:order === "ASC"?"ASC" :"DESC"
            }
        });
        console.log(data)

        response.render('inicio',{
            datos:data
            //, params:response
        });
    }

    
    @Get("create")
    createPetView(
        @Res() response
    ){
           response.render("create")
    }

    @Post("createForm")
    async createUser(
        @Body() params,
        @Res() response
    ){
        await this._petService.petEntity.save({
            nombre:params.nombre,
            breed:params.raza
        });
        response.redirect(`/pets/list?men=Pet create`+params.nombre)
    }



    @Get("query")
    query(
        @Req() request
    ){
        let take=10;
        let skip=0;
        let order="ASC";
        if(request.query.skip){
            skip=request.query.skip;
        }
        if(request.query.take){
            take=request.query.take;
        }
        if(request.query.order){
            order=request.query.order;
        }

        let queryWhereAnd:FindConditions<PetEntity>[]=[{
            nombre:"manases"
        }];
        let queryWhereOr:FindConditions<PetEntity>[]=[{
            nombre:"manases"
        },{
            nombre:"Mijotron"
        }];

        return this._petService.petEntity.findAndCount({
            where:queryWhereOr  ,
            take:take,
            skip:skip,
            order:{
                id:order === "ASC"?"ASC" :"DESC"
            }
        });

    }

    @Post("create")
    createPet(
        @Req()  request,
        @Body() body
    ){
        console.log(request.body)

        return this._petService.petEntity.save({
            nombre:body.name,
            breed:body.breed
        })
    };

    @Get("pets")
    getPets(){
        return this._petService.petEntity.find()
    }

    //MASCOTA PARTE 2
    @Post("")
    async createPetRest(
        @Body() body
    ){
        return await this._petService.petEntity.save({
            nombre:body.nombre,
            breed:"Mijotron",
            fkUser:1
        })
    }

}