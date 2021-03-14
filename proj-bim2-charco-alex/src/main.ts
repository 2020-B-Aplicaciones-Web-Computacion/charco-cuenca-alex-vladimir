import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
const helmet=require("helmet")
const session=require("express-session");
const fileStore=require("session-file-store")(session);
const express=require("express")
var fileStoreOptions={}

import * as chalk from "chalk";



async function bootstrap() {
  try{

    const app:any = await NestFactory.create(AppModule);
    app.set("view engine","ejs");

    app.use('/public/',express.static("./public"));
    app.use(session({
      store:new fileStore(fileStoreOptions),
      secret:"SECRETO"
    }))

    await app.use(cookieParser())
    await app.use(helmet());
    await app.listen(3000);
    console.log(chalk.blue.inverse.bold("SERVER RUNNING ON PORT: 3000"))
  }catch (e) {
    console.log(chalk.red.inverse.bold("ERROR",e))
  }
}
bootstrap();
