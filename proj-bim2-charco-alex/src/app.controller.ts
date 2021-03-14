import {BadRequestException, Controller, ForbiddenException, Get, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("")
  index(
    @Res() response
  ){
    response.render("index");

  }


  @Get("/login/:nombre/:apellido")
  login(
      //Decorador para sesion de NestJs
      @Session() session,
      @Req() request
  ):string{
    if(request.params.nombre&&request.params.apellido){
      session.usuario={
        nombre:request.params.nombre,
        apellido:request.params.apellido
      };

      if(request.params.apellido==="b"){
        session.usuario.isAdmin=true;
      }

      return "User Logged In as: "+session.usuario.nombre+" "+session.usuario.apellido;
    }else {
      throw new BadRequestException("No envia nombre ni apellido");//400
    }

  }

  @Get("/identify")
  indetify(
      @Session() session
  ):string{
    if(session.usuario){
      return session.usuario.nombre+session.usuario.apellido
    }else {
      return "Not logged"
    }
  }

  @Get("/logout")
  logout(
      @Session() session,
      @Req() request
  ){
    session.usuario=undefined;
    request.session.destroy();
    return "Logged Out";

  }

  @Get("/protected")
  protected (
      @Session() session
  ):string{
    if(session.usuario){
      if(session.usuario.isAdmin){
        return "Secret Content"
      }else {
        throw new ForbiddenException("No tienes Rol Admin")
      }
    }else {
      throw new ForbiddenException("Not Logged")
    }
  }
}
