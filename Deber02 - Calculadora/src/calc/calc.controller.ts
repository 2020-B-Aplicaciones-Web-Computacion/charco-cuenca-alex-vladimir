import {Controller, Get, Header, HttpCode, Post, Put,Delete,Req, Res} from "@nestjs/common";


@Controller("calc")
export class calcController{
    //Rutas con metodo HTTP

    @Get("setName")
    cookie(
        @Req() request,
        @Res({passthrough:true}) response
    ){
        console.log("PETICION: ",request.cookies)    //Cokies en peticion
        //Setear Cookies
        response.cookie("nombre",request.query.nombre)


        return "Usuario iniciado: "+request.query.nombre
    }


    @Get ("suma")
    @HttpCode(200)
    suma(
        @Req() request,
        @Res({passthrough:true}) response
    ){
        const des:Boolean=setPuntaje(request,response);

        if(des===true){
            return "Initial Score Set"
        }else {
            const punt=Number(request.cookies.puntaje);
            const op=Number(request.query.num1)+Number(request.query.num2);
            const score=punt-op;

            response.cookie("puntaje",score);
            if(score<=0){
                return "Ganaste";
            }else{
                return "Current Score: "+score;
            }
        }


    }

    @Post ("resta")
    @HttpCode(201)
    resta(
        @Req() request,
        @Res({passthrough:true}) response
    ){
        const des:Boolean=setPuntaje(request,response);


        if(des===true){
            return "Initial Score Set"
        }else {
            const punt=Number(request.cookies.puntaje)
            const op=Number(request.body.num1)-Number(request.body.num2)
            const score=punt-op;

            response.cookie("puntaje",score);
            if(score<=0){
                return "Ganaste";
            }else{
                return "Current Score: "+score;
            }
        }
    }

    @Put ("mult/:num1/:num2")
    @HttpCode(200)
    mult(
        @Req() request,
        @Res({passthrough:true}) response
    ){

        const des:Boolean=setPuntaje(request,response);


        if(des===true){
            return "Initial Score Set"
        }else {
            const punt=Number(request.cookies.puntaje)
            const op=Number(request.params.num1)*Number(request.params.num2)
            const score=punt-op;

            response.cookie("puntaje",score);
            if(score<=0){
                return "Ganaste";
            }else{
                return "Current Score: "+score;
            }
        }
    }

    @Delete("division")
    @HttpCode(201)
    division(
        @Req() request,
        @Res({passthrough:true}) response
    ){
        const des:Boolean=setPuntaje(request,response);


        if(des===true){
            return "Initial Score Set"
        }else {
            const punt=Number(request.cookies.puntaje)
            const op=Number(request.headers.num1)/Number(request.headers.num2)
            const score=punt-op;

            response.cookie("puntaje",score);
            if(score<=0){
                return "Ganaste";
            }else{
                return "Current Score: "+score;
            }
        }




    }


}

const setPuntaje=(request,response) => {
    console.log("CURRENT SCORE: "+request.cookies.puntaje);
    var des: Boolean = false;

    if (!request.cookies.hasOwnProperty("puntaje")) {
        console.log("SETTING SCORE");
        response.cookie("puntaje", 100);
        des = true;
    } else {
        console.log("SETTING SCORE");
        if (Number(request.cookies.puntaje) <= 0) {
            response.cookie("puntaje", 100);
            des = true;
        }
    }
    return des;
}