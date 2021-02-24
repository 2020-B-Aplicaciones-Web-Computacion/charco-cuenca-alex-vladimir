import {Controller, Get, Header, HttpCode, Post, Req, Res} from "@nestjs/common";

//Directorio URL del Controlador
@Controller("users")
//@Controller("/")
export class userController{
    //Rutas con metodo HTTP
    @Get ("hola")
    @HttpCode(200)
    @Header("cheems","server")
    @Header("server","doge")
    hola(
        //Decoradores para request y response
        @Req() request
        //,@Res() response
    ){
        console.log(request.body)
        //response.status(500).send(request.body)
        //Funcion de retorno para ruta
        return "Que mas ve http"
    }

    @Get ("adios")
    adios(){
        //Funcion de retorno para ruta
        return "Ahi nos olemos http"
    }

    @Post ("data")
    @Header("cheems","server")
    @Header("server","doge")
    data(
        @Req() request,
        @Res() response
    ){
        //Parametros del query
        console.log(request.query)
        const r={
            ...request.body,
            qparams:request.query,
            header:request.headers
        }

        response.send(r)
        //Funcion de retorno para ruta
        //return "Ahi nos olemos http"
    }

}