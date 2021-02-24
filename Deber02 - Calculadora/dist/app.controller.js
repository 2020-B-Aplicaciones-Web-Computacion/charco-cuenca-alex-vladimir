"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
class Cliente {
    constructor(parNom, propNom) {
        this.apellidoCleinte = "Fulanito";
        this.ageCliente = 1;
        this.apellidoCleinte = parNom;
    }
    funPuc() {
        const var1 = 0;
        var var2 = 0;
        let var3 = 0;
        const str = "String";
        const chr = 'a';
        const text = "string";
        const char = 'a';
        const entero = 150;
        const decimal = 1.50;
        const boole = true;
        const fecha = new Date();
    }
    funPriv() {
    }
    static funSta() {
        return 1;
    }
}
Cliente.sexoCliente = true;
class User {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
const user1 = new User("Cosme", "Fulanito");
let objUser = {
    nombre: "Cosme 2",
    apellido: "Fulanito 2"
};
var userin1 = {
    nombre: "Cosme In",
    apellido: "Fulanito In"
};
let a = 22;
let b = a;
b = 60;
let edad1 = {
    edad: 22
};
let edad2 = edad1;
edad2.edad = 60;
let edadClon = Object.assign({}, edad1);
edadClon.edad = 100;
const array1 = [1, ",true", null, new Date()];
const array2 = [1, 2, 3, 4, 5];
const array3 = [...array2, 100];
console.log("array: ", array2);
const index = array2.findIndex((item) => {
    return item === 3;
});
array2[index] = 101;
console.log("array: ", array2);
array2.push(999999);
console.log("array: ", array2);
array2.unshift(-1);
console.log("array: ", array2);
0 ? console.log("Truty") : console.log("False");
1 ? console.log("Truty") : console.log("False");
-1 ? console.log("Truty") : console.log("False");
[] ? console.log("Truty") : console.log("False");
//# sourceMappingURL=app.controller.js.map