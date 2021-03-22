import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Req, Res } from '@nestjs/common';
import {SubjectService} from "./subject.service"
import { SubjectEntity } from './subject.entity';
import { FindConditions, Like } from 'typeorm';
import { SubjectDTO } from '../DTO/subjectDTO';
import { validate } from 'class-validator';

//Directorio URL del Controlador
@Controller("subject")
export class SubjectController{

  constructor(//Inyectando Dependencia de (Servicios)
    private _subjectService:SubjectService
  ) {

  }
  @Get("")
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


    let consultaWhereOR: FindConditions<SubjectEntity>[] = [
      {
        sub_name: Like(
          request.query.search ? `%${request.query.search}%` : '%%'
        ),
      }
    ];


      let data= await this._subjectService.SubjectEntity.findAndCount({
        where:consultaWhereOR,
        take:take,
        skip:skip,
        order:{
          id:order === "ASC"?"ASC" :"DESC"
        }
      });
      response.render('subjectList'
        ,{
          datos:data,
          men:request.query.men
        });



  }

  @Get("create")
  async create(
    @Req() request
    ,@Res() response
  ){

    response.render("subjectCreate",{
      men:request.query.men
    })
  }

  @Post("createForm")
  async createSubject(
    @Body() params,
    @Res() response
  ){
    const valSubject=new SubjectDTO()

      valSubject.sub_name=params.nombre;
      valSubject.sub_cupo= parseInt(params.cupo) ;
      valSubject.sub_cod=params.codigo.toUpperCase();
      valSubject.sub_fstart=new Date(params.finicio);
      valSubject.sub_fend=new Date(params.fend);

    const errors=await validate(valSubject)

    if(errors.length>0){
      console.log("errores: ",errors.length, "are: ",errors.toString())
      response.redirect(`/subject/create?men=Invalid Input`)
    }else{
      try{
        await this._subjectService.SubjectEntity.save({
          sub_name:params.nombre,
          sub_cupo:params.cupo,
          sub_cod:params.codigo.toUpperCase(),
          sub_fstart:params.finicio,
          sub_fend:params.fend
        });
        response.redirect(`/subject/?men=Subject Created: ${params.codigo.toUpperCase()} - ${params.nombre}`)
      }catch (e) {
        response.redirect(`/subject/create?men=Invalid Input`)
      }

    }

  }

  @Post("updateForm")
  async updateSubject(
    @Req()request,
    @Body() params,
    @Res() response
  ){
    const valSubject=new SubjectDTO()

    valSubject.sub_name=params.nombre;
    valSubject.sub_cupo= parseInt(params.cupo) ;
    valSubject.sub_cod=params.codigo.toUpperCase();
    valSubject.sub_fstart=new Date(params.finicio);
    valSubject.sub_fend=new Date(params.fend);

    const errors=await validate(valSubject)

    if(errors.length>0){
      console.log("errores: ",errors.length, "are: ",errors.toString())
      response.redirect(`/subject/create?men=Invalid Input`)
    }else{
      const subject={
        sub_name:params.nombre,
        sub_cupo:params.cupo,
        sub_cod:params.codigo.toUpperCase(),
        sub_fstart:params.finicio,
        sub_fend:params.fend
      }
      await this._subjectService.SubjectEntity.update(
        request.query.id,
        subject
      )

      response.redirect(`/subject/?men=Subject Updated: ${subject.sub_cod} - ${subject.sub_name}`)
    }


  }

  @Get("delete")
  async delete(
    @Req() request
    ,@Res() response
  ){
    let idPar=request.query.id
    let data=await this._subjectService.SubjectEntity.findOne(idPar)
    console.log(data)
    await response.render("subjectDelete",{
      reg:data
    })
  }

  @Post("deleting")
  async deleting(
    @Req() request
    ,@Res() response
  ){
    await this._subjectService.SubjectEntity.delete(request.query.id)
    response.redirect(`/subject/?men=Subject Deleted:`)
  }

  @Get("edit")
  async update(
    @Req() request
    ,@Res() response
  ){
    let idPar=request.query.id

    let data= await this._subjectService.SubjectEntity.findOne({
      id:idPar
    })
    console.log(data)
    console.log(data.sub_name)

    await response.render("subjectUpdate"
      ,{
      reg:data
    })
  }

  @Get("red")
  red(
    @Res() response
  ){
    response.redirect("/")
  }

}