import {BadRequestException, Controller, ForbiddenException, Get, Req, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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


/*
//Clase - Typescript

abstract class Cliente {

  public nombreCliente?: string;              //Puede ser undefined
  private apellidoCleinte: string = "Fulanito";  //Valor por default
  protected ageCliente = 1;
  static sexoCliente: boolean = true;


  constructor(
      parNom: string,    //parametro
      propNom: string    //Propiedad
  ) {
    this.apellidoCleinte = parNom;
  }


  //FUNCIONES
  public funPuc(): void {

    const var1 = 0
    var var2 = 0
    let var3 = 0

    const str = "String"
    const chr = 'a'

    //Tipos de datos
    const text: string = "string";
    const char: string = 'a';
    const entero: number = 150;
    const decimal: number = 1.50;
    const boole: boolean = true;
    const fecha: Date = new Date()


  }

  private funPriv() {

  }

  static funSta(): Number {
    return 1;
  }

}

class User{
    constructor(
        public nombre:string,
        public apellido:string
    ) {
    }
}

const user1:User=new User("Cosme","Fulanito");

let objUser={
  nombre:"Cosme 2",
  apellido:"Fulanito 2"
}

//Interfaces
interface userInter{
  nombre:string,
  apellido:string,
  edad?:number
}

var userin1:userInter={
  nombre:"Cosme In",
  apellido:"Fulanito In"
}
//console.log(userin1)



//Punteros y Referencias
let a=22
let b=a
b=60
//console.log(a,b)


let edad1={
  edad:22
}

let edad2=edad1 //Asigna referencias

edad2.edad=60

//Clonacion de objetos
let edadClon={...edad1}
edadClon.edad=100

console.log("Edad 1: ",edad1)
console.log("Edad 2: ",edad2)
console.log("Edad 3: ",edadClon)



//Arreglos
const array1=[1,",true",null,new Date()]
const array2:number[]=[1,2,3,4,5]
const array3:number[]=[...array2,100]

console.log("Array 1: ",array1)
console.log("Array 2: ",array2)
console.log("Array 3: ",array3)


console.log("array: ",array2)
const index=array2.findIndex(
    //Funcion anonima: trabajo dentro de una funcion
    (item:number)=>{
      return item===3
    }
)
array2[index]=101;
//console.log("index: ",index)
console.log("array: ",array2)

//Anadir al final
array2.push(999999)

console.log("array: ",array2)
//Anadir al principio
array2.unshift(-1)

console.log("array: ",array2)


0 ?  console.log("Truty"):console.log("False");
1 ?  console.log("Truty"):console.log("False");
-1 ?  console.log("Truty"):console.log("False");
[] ?  console.log("Truty"):console.log("False");

*/
