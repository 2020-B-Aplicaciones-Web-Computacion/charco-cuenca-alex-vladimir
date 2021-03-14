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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const typeorm_1 = require("typeorm");
let SubjectController = class SubjectController {
    constructor(_subjectService) {
        this._subjectService = _subjectService;
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
        let consultaWhereOR = [
            {
                sub_name: typeorm_1.Like(request.query.search ? `%${request.query.search}%` : '%%'),
            }
        ];
        let data = await this._subjectService.SubjectEntity.findAndCount({
            where: consultaWhereOR,
            take: take,
            skip: skip,
            order: {
                id: order === "ASC" ? "ASC" : "DESC"
            }
        });
        response.render('subjectList', {
            datos: data
        });
    }
    async create(request, response) {
        response.render("subjectCreate");
    }
    async createSubject(params, response) {
        await this._subjectService.SubjectEntity.save({
            sub_name: params.nombre,
            sub_cupo: params.cupo,
            sub_cod: params.codigo.toUpperCase(),
            sub_fstart: params.finicio,
            sub_fend: params.fend
        });
        response.redirect(`/subject/?men=Subject Created:`);
    }
    async updateSubject(request, params, response) {
        const subject = {
            sub_name: params.nombre,
            sub_cupo: params.cupo,
            sub_cod: params.codigo.toUpperCase(),
            sub_fstart: params.finicio,
            sub_fend: params.fend
        };
        await this._subjectService.SubjectEntity.update(request.query.id, subject);
        response.redirect(`/subject/?men=Subject Updated:`);
    }
    async delete(request, response) {
        let idPar = request.query.id;
        let data = await this._subjectService.SubjectEntity.findOne(idPar);
        console.log(data);
        await response.render("subjectDelete", {
            reg: data
        });
    }
    async deleting(request, response) {
        await this._subjectService.SubjectEntity.delete(request.query.id);
        response.redirect(`/subject/?men=Subject Deleted:`);
    }
    async update(request, response) {
        let idPar = request.query.id;
        let data = await this._subjectService.SubjectEntity.findOne({
            id: idPar
        });
        console.log(data);
        console.log(data.sub_name);
        await response.render("subjectUpdate", {
            reg: data
        });
    }
    red(response) {
        response.redirect("/");
    }
};
__decorate([
    common_1.Get(""),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "list", null);
__decorate([
    common_1.Get("create"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "create", null);
__decorate([
    common_1.Post("createForm"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "createSubject", null);
__decorate([
    common_1.Post("updateForm"),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "updateSubject", null);
__decorate([
    common_1.Get("delete"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "delete", null);
__decorate([
    common_1.Post("deleting"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "deleting", null);
__decorate([
    common_1.Get("edit"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "update", null);
__decorate([
    common_1.Get("red"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SubjectController.prototype, "red", null);
SubjectController = __decorate([
    common_1.Controller("subject"),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map