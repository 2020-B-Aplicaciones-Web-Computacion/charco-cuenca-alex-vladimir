"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        await app.use(cookieParser());
        await app.listen(3000);
        console.log(chalk.blue.inverse.bold("SERVER RUNNING ON PORT: 3000"));
    }
    catch (e) {
        console.log(chalk.red.inverse.bold("ERROR", e));
    }
}
bootstrap();
//# sourceMappingURL=main.js.map