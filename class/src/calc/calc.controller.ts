import {Controller, Get, Header, HttpCode, Post, Put,Delete,Req, Res} from "@nestjs/common";


@Controller("calc")
export class calcController{
    //Rutas con metodo HTTP

    @Get ("suma")
    @HttpCode(200)
    suma(
        @Req() request
    ){
        return Number(request.query.num1)+Number(request.query.num2)
    }

    @Post ("resta")
    @HttpCode(201)
    resta(
        @Req() request,
        @Res() response
    ){
        response.set("resultado",Number(request.body.num1)-Number(request.body.num2)).send()

    }

    @Put ("mult/:num1/:num2")
    @HttpCode(200)
    mult(
        @Req() request
    ){
        return Number(request.params.num1)*Number(request.params.num2)
    }

    @Delete("division")
    @HttpCode(201)
    division(
        @Req() request
    ){
        return Number(request.headers.num1)/Number(request.headers.num2)
    }

}