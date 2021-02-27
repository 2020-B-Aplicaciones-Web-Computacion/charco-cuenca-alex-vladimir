import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import * as chalk from "chalk";

async function bootstrap() {
  try{

    const app = await NestFactory.create(AppModule);
    await app.use(cookieParser())
    await app.listen(3000);
    console.log(chalk.blue.inverse.bold("SERVER RUNNING ON PORT: 3000"))
  }catch (e) {
    console.log(chalk.red.inverse.bold("ERROR",e))
  }
}
bootstrap();
