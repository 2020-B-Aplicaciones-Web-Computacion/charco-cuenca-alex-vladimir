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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcController = void 0;
const common_1 = require("@nestjs/common");
let calcController = class calcController {
    cookie(request, response) {
        console.log("PETICION: ", request.cookies);
        response.cookie("nombre", request.query.nombre);
        return "Usuario iniciado: " + request.query.nombre;
    }
    suma(request, response) {
        const des = setPuntaje(request, response);
        if (des === true) {
            return "Initial Score Set";
        }
        else {
            const punt = Number(request.cookies.puntaje);
            const op = Number(request.query.num1) + Number(request.query.num2);
            const score = punt - op;
            response.cookie("puntaje", score);
            if (score <= 0) {
                return "Ganaste";
            }
            else {
                return "Current Score: " + score;
            }
        }
    }
    resta(request, response) {
        const des = setPuntaje(request, response);
        if (des === true) {
            return "Initial Score Set";
        }
        else {
            const punt = Number(request.cookies.puntaje);
            const op = Number(request.body.num1) - Number(request.body.num2);
            const score = punt - op;
            response.cookie("puntaje", score);
            if (score <= 0) {
                return "Ganaste";
            }
            else {
                return "Current Score: " + score;
            }
        }
    }
    mult(request, response) {
        const des = setPuntaje(request, response);
        if (des === true) {
            return "Initial Score Set";
        }
        else {
            const punt = Number(request.cookies.puntaje);
            const op = Number(request.params.num1) * Number(request.params.num2);
            const score = punt - op;
            response.cookie("puntaje", score);
            if (score <= 0) {
                return "Ganaste";
            }
            else {
                return "Current Score: " + score;
            }
        }
    }
    division(request, response) {
        const des = setPuntaje(request, response);
        if (des === true) {
            return "Initial Score Set";
        }
        else {
            const punt = Number(request.cookies.puntaje);
            const op = Number(request.headers.num1) / Number(request.headers.num2);
            const score = punt - op;
            response.cookie("puntaje", score);
            if (score <= 0) {
                return "Ganaste";
            }
            else {
                return "Current Score: " + score;
            }
        }
    }
};
__decorate([
    common_1.Get("setName"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "cookie", null);
__decorate([
    common_1.Get("suma"),
    common_1.HttpCode(200),
    __param(0, common_1.Req()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "suma", null);
__decorate([
    common_1.Post("resta"),
    common_1.HttpCode(201),
    __param(0, common_1.Req()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "resta", null);
__decorate([
    common_1.Put("mult/:num1/:num2"),
    common_1.HttpCode(200),
    __param(0, common_1.Req()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "mult", null);
__decorate([
    common_1.Delete("division"),
    common_1.HttpCode(201),
    __param(0, common_1.Req()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "division", null);
calcController = __decorate([
    common_1.Controller("calc")
], calcController);
exports.calcController = calcController;
const setPuntaje = (request, response) => {
    console.log("CURRENT SCORE: " + request.cookies.puntaje);
    var des = false;
    if (!request.cookies.hasOwnProperty("puntaje")) {
        console.log("SETTING SCORE");
        response.cookie("puntaje", 100);
        des = true;
    }
    else {
        console.log("SETTING SCORE");
        if (Number(request.cookies.puntaje) <= 0) {
            response.cookie("puntaje", 100);
            des = true;
        }
    }
    return des;
};
//# sourceMappingURL=calc.controller.js.map