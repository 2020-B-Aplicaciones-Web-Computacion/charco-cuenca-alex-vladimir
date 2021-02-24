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
    suma(request) {
        return Number(request.query.num1) + Number(request.query.num2);
    }
    resta(request, response) {
        response.set("resultado", Number(request.body.num1) - Number(request.body.num2)).send();
    }
    mult(request) {
        return Number(request.params.num1) * Number(request.params.num2);
    }
    division(request) {
        return Number(request.headers.num1) / Number(request.headers.num2);
    }
};
__decorate([
    common_1.Get("suma"),
    common_1.HttpCode(200),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "suma", null);
__decorate([
    common_1.Post("resta"),
    common_1.HttpCode(201),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "resta", null);
__decorate([
    common_1.Put("mult/:num1/:num2"),
    common_1.HttpCode(200),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "mult", null);
__decorate([
    common_1.Delete("division"),
    common_1.HttpCode(201),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], calcController.prototype, "division", null);
calcController = __decorate([
    common_1.Controller("calc")
], calcController);
exports.calcController = calcController;
//# sourceMappingURL=calc.controller.js.map