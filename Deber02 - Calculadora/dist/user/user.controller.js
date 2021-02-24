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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
let userController = class userController {
    hola(request) {
        console.log(request.body);
        return "Que mas ve http";
    }
    adios() {
        return "Ahi nos olemos http";
    }
    data(request, response) {
        console.log(request.query);
        const r = Object.assign(Object.assign({}, request.body), { qparams: request.query, header: request.headers });
        response.send(r);
    }
};
__decorate([
    common_1.Get("hola"),
    common_1.HttpCode(200),
    common_1.Header("cheems", "server"),
    common_1.Header("server", "doge"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], userController.prototype, "hola", null);
__decorate([
    common_1.Get("adios"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], userController.prototype, "adios", null);
__decorate([
    common_1.Post("data"),
    common_1.Header("cheems", "server"),
    common_1.Header("server", "doge"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], userController.prototype, "data", null);
userController = __decorate([
    common_1.Controller("users")
], userController);
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map