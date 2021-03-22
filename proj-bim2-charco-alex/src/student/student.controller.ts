import {Body, Controller, Get, Header, HttpCode, Param, Post, Req, Res} from "@nestjs/common";
import {StudentService} from "./student.service";
import { SubjectEntity } from '../subject/subject.entity';
import {  FindConditions, Like } from 'typeorm';
import { SubjectService } from '../subject/subject.service';
import { StudentEntity } from './student.entity';
import { IsString, validate } from 'class-validator';
import { StudentDTO } from '../DTO/studentDTO';


//Directorio URL del Controlador
@Controller("student")
export class StudentController{

  constructor(//Inyectando Dependencia de (Servicios)
    private _StudentService:StudentService
    ,private _subjectService:SubjectService

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

    let consultaWhereOR: FindConditions<StudentEntity>[] = [
      {
        nom_stud: Like(
          request.query.search ? `%${request.query.search}%` : '%%'
        ),
      }
    ];


    let data= await this._StudentService.StudentEntity.findAndCount({
      where:consultaWhereOR,
      take:take,
      skip:skip,
      order:{
        id:order === "ASC"?"ASC" :"DESC"
      }
    });
    response.render('studentList'
      ,{
        datos:data,
        men:request.query.men
      })
  }


  @Get("create")
  async create(
    @Req() request
    ,@Res() response,
  ){
    //Subjects List
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

    response.render("studentCreate"
      ,{
        datos:data,
        men:request.query.men
      })
  }


  @Post("createForm")
  async createForm(
    @Body() params
    ,@Res() response
  ){
    const subPar=await this._subjectService.SubjectEntity.findOne(params.subject)
    // @ts-ignore
    subPar.sub_cupo--

    const errors = await validate(subPar);

    const valStudent=new StudentDTO()

    valStudent.nom_stud=params.nombre
    valStudent.ape_stud=params.apellido
    valStudent.fnac_stud=new Date(params.fnac)
    valStudent.gen_stud=params.genero
    valStudent.subid_stud=parseInt(params.subject)

    const errors2=await validate(valStudent)

    if (errors.length > 0) {
      response.redirect(`/student/create?men=Classroom is Full`)
    } else {
      if(errors2.length<=0) {
        await this._StudentService.StudentEntity.save({
          nom_stud: params.nombre,
          ape_stud: params.apellido,
          fnac_stud: params.fnac,
          gen_stud: params.genero,
          subid_stud: params.subject,
          fkSubject: params.subject,
        });
        await this._subjectService.SubjectEntity.update(
          params.subject,
          subPar,
        );
        response.redirect(`/student/?men=Student_Created:`);
      }else {
        response.redirect(`/student/create?men=Invalid Input`)
        console.log(errors2.toString())
        console.log("Num errors: ",errors2.length)

      }
    }
  }

  @Get("edit")
  async edit(
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

    let dataSub= await this._subjectService.SubjectEntity.findAndCount({
      where:consultaWhereOR,
      take:take,
      skip:skip,
      order:{
        id:order === "ASC"?"ASC" :"DESC"
      }
    });

    let idPar=request.query.id
    let dataStu= await this._StudentService.StudentEntity.findOne({
      id:idPar
    })


    await response.render("studentUpdate"
      ,{
        datos:dataSub,
        stud:dataStu,
        men:request.query.men
      })

  }

  @Post("updateForm")
  async updateForm(
    @Req() request,
    @Body() params
    ,@Res() response
  ){

    const valStudent=new StudentDTO()

    valStudent.nom_stud=params.nombre
    valStudent.ape_stud=params.apellido
    valStudent.fnac_stud=new Date(params.fnac)
    valStudent.gen_stud=params.genero
    valStudent.subid_stud=parseInt(params.subject)

    const errors2=await validate(valStudent)

    if(errors2.length<=0) {
      const student={
        nom_stud:params.nombre,
        ape_stud:params.apellido,
        fnac_stud:params.fnac,
        gen_stud:params.genero,
        subid_stud:params.subject,
        fkSubject:params.subject
      }

        const oldSub=await this._subjectService.SubjectEntity.findOne(request.query.old)
        // @ts-ignore
        oldSub.sub_cupo++
        const newSub=await this._subjectService.SubjectEntity.findOne(params.subject)
        // @ts-ignore
        newSub.sub_cupo--

        const errors = await validate(newSub);

        if (errors.length > 0) {
          response.redirect(`/student/edit?id=${request.query.id}&men=Classroom is Full`)
        } else {
          await this._subjectService.SubjectEntity.update(
            request.query.old,
            oldSub
          );
          await this._subjectService.SubjectEntity.update(
            params.subject,
            newSub
          );

          await this._StudentService.StudentEntity.update(
            request.query.id,
            student
          );
          response.redirect(`/student/?men=Student Updated:`)
        }
    }else {
      response.redirect(`/student/edit?id=${request.query.id}&men=Invalid Input`)
    }
  }

  @Get("delete")
  async delete(
    @Req() request,
    @Body() params
    ,@Res() response
  ){
    let idPar=request.query.id
    let data=await this._StudentService.StudentEntity.findOne(idPar)

    await response.render("studentDelete",{
      stud:data
    })

  }


  @Post("deleting")
  async deleting(
    @Req() request,
    @Body() params
    ,@Res() response
  ){
    console.log(request.query.id)
    console.log(params.subject)

    await this._StudentService.StudentEntity.delete(request.query.id)
    var subj=await this._subjectService.SubjectEntity.findOne(params.subject)
    console.log(subj)
    // @ts-ignore
    subj.sub_cupo++
    await this._subjectService.SubjectEntity.update(
      params.subject,
      subj
    );


    response.redirect(`/student/?men=Student Deleted:`)


  }






  @Get("red")
  red(
    @Res() response
  ){
    response.redirect("/")
  }


}