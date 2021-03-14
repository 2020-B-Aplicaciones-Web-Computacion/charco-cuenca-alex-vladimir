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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    index(response) {
        response.render("index");
    }
    login(session, request) {
        if (request.params.nombre && request.params.apellido) {
            session.usuario = {
                nombre: request.params.nombre,
                apellido: request.params.apellido
            };
            if (request.params.apellido === "b") {
                session.usuario.isAdmin = true;
            }
            return "User Logged In as: " + session.usuario.nombre + " " + session.usuario.apellido;
        }
        else {
            throw new common_1.BadRequestException("No envia nombre ni apellido");
        }
    }
    indetify(session) {
        if (session.usuario) {
            return session.usuario.nombre + session.usuario.apellido;
        }
        else {
            return "Not logged";
        }
    }
    logout(session, request) {
        session.usuario = undefined;
        request.session.destroy();
        return "Logged Out";
    }
    protected(session) {
        if (session.usuario) {
            if (session.usuario.isAdmin) {
                return "Secret Content";
            }
            else {
                throw new common_1.ForbiddenException("No tienes Rol Admin");
            }
        }
        else {
            throw new common_1.ForbiddenException("Not Logged");
        }
    }
};
__decorate([
    common_1.Get(""),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
__decorate([
    common_1.Get("/login/:nombre/:apellido"),
    __param(0, common_1.Session()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "login", null);
__decorate([
    common_1.Get("/identify"),
    __param(0, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "indetify", null);
__decorate([
    common_1.Get("/logout"),
    __param(0, common_1.Session()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
__decorate([
    common_1.Get("/protected"),
    __param(0, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "protected", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map