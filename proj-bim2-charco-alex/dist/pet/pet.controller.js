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
exports.petController = void 0;
const common_1 = require("@nestjs/common");
const pet_service_1 = require("./pet.service");
let petController = class petController {
    constructor(_petService) {
        this._petService = _petService;
    }
    async list(request, response) {
        let take = 10;
        let skip = 0;
        let order = "ASC";
        if (request.query.skip) {
            skip = request.query.skip;
        }
        if (request.query.take) {
            take = request.query.take;
        }
        if (request.query.order) {
            order = request.query.order;
        }
        let data = await this._petService.petEntity.findAndCount({
            take: take,
            skip: skip,
            order: {
                id: order === "ASC" ? "ASC" : "DESC"
            }
        });
        console.log(data);
        response.render('inicio', {
            datos: data
        });
    }
    createPetView(response) {
        response.render("create");
    }
    async createUser(params, response) {
        await this._petService.petEntity.save({
            nombre: params.nombre,
            breed: params.raza
        });
        response.redirect(`/pets/list?men=Pet create` + params.nombre);
    }
    query(request) {
        let take = 10;
        let skip = 0;
        let order = "ASC";
        if (request.query.skip) {
            skip = request.query.skip;
        }
        if (request.query.take) {
            take = request.query.take;
        }
        if (request.query.order) {
            order = request.query.order;
        }
        let queryWhereAnd = [{
                nombre: "manases"
            }];
        let queryWhereOr = [{
                nombre: "manases"
            }, {
                nombre: "Mijotron"
            }];
        return this._petService.petEntity.findAndCount({
            where: queryWhereOr,
            take: take,
            skip: skip,
            order: {
                id: order === "ASC" ? "ASC" : "DESC"
            }
        });
    }
    createPet(request, body) {
        console.log(request.body);
        return this._petService.petEntity.save({
            nombre: body.name,
            breed: body.breed
        });
    }
    ;
    getPets() {
        return this._petService.petEntity.find();
    }
    async createPetRest(body) {
        return await this._petService.petEntity.save({
            nombre: body.nombre,
            breed: "Mijotron",
            fkUser: 1
        });
    }
};
__decorate([
    common_1.Get("list"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], petController.prototype, "list", null);
__decorate([
    common_1.Get("create"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], petController.prototype, "createPetView", null);
__decorate([
    common_1.Post("createForm"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], petController.prototype, "createUser", null);
__decorate([
    common_1.Get("query"),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], petController.prototype, "query", null);
__decorate([
    common_1.Post("create"),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], petController.prototype, "createPet", null);
__decorate([
    common_1.Get("pets"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], petController.prototype, "getPets", null);
__decorate([
    common_1.Post(""),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], petController.prototype, "createPetRest", null);
petController = __decorate([
    common_1.Controller("pets"),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], petController);
exports.petController = petController;
//# sourceMappingURL=pet.controller.js.map