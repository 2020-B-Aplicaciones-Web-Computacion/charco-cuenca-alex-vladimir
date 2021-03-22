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
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const typeorm_1 = require("typeorm");
const subject_service_1 = require("../subject/subject.service");
const class_validator_1 = require("class-validator");
const studentDTO_1 = require("../DTO/studentDTO");
let StudentController = class StudentController {
    constructor(_StudentService, _subjectService) {
        this._StudentService = _StudentService;
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
                nom_stud: typeorm_1.Like(request.query.search ? `%${request.query.search}%` : '%%'),
            }
        ];
        let data = await this._StudentService.StudentEntity.findAndCount({
            where: consultaWhereOR,
            take: take,
            skip: skip,
            order: {
                id: order === "ASC" ? "ASC" : "DESC"
            }
        });
        response.render('studentList', {
            datos: data,
            men: request.query.men
        });
    }
    async create(request, response) {
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
        response.render("studentCreate", {
            datos: data,
            men: request.query.men
        });
    }
    async createForm(params, response) {
        const subPar = await this._subjectService.SubjectEntity.findOne(params.subject);
        subPar.sub_cupo--;
        const errors = await class_validator_1.validate(subPar);
        const valStudent = new studentDTO_1.StudentDTO();
        valStudent.nom_stud = params.nombre;
        valStudent.ape_stud = params.apellido;
        valStudent.fnac_stud = new Date(params.fnac);
        valStudent.gen_stud = params.genero;
        valStudent.subid_stud = parseInt(params.subject);
        const errors2 = await class_validator_1.validate(valStudent);
        if (errors.length > 0) {
            response.redirect(`/student/create?men=Classroom is Full`);
        }
        else {
            if (errors2.length <= 0) {
                await this._StudentService.StudentEntity.save({
                    nom_stud: params.nombre,
                    ape_stud: params.apellido,
                    fnac_stud: params.fnac,
                    gen_stud: params.genero,
                    subid_stud: params.subject,
                    fkSubject: params.subject,
                });
                await this._subjectService.SubjectEntity.update(params.subject, subPar);
                response.redirect(`/student/?men=Student_Created:`);
            }
            else {
                response.redirect(`/student/create?men=Invalid Input`);
                console.log(errors2.toString());
                console.log("Num errors: ", errors2.length);
            }
        }
    }
    async edit(request, response) {
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
        let dataSub = await this._subjectService.SubjectEntity.findAndCount({
            where: consultaWhereOR,
            take: take,
            skip: skip,
            order: {
                id: order === "ASC" ? "ASC" : "DESC"
            }
        });
        let idPar = request.query.id;
        let dataStu = await this._StudentService.StudentEntity.findOne({
            id: idPar
        });
        await response.render("studentUpdate", {
            datos: dataSub,
            stud: dataStu,
            men: request.query.men
        });
    }
    async updateForm(request, params, response) {
        const valStudent = new studentDTO_1.StudentDTO();
        valStudent.nom_stud = params.nombre;
        valStudent.ape_stud = params.apellido;
        valStudent.fnac_stud = new Date(params.fnac);
        valStudent.gen_stud = params.genero;
        valStudent.subid_stud = parseInt(params.subject);
        const errors2 = await class_validator_1.validate(valStudent);
        if (errors2.length <= 0) {
            const student = {
                nom_stud: params.nombre,
                ape_stud: params.apellido,
                fnac_stud: params.fnac,
                gen_stud: params.genero,
                subid_stud: params.subject,
                fkSubject: params.subject
            };
            const oldSub = await this._subjectService.SubjectEntity.findOne(request.query.old);
            oldSub.sub_cupo++;
            const newSub = await this._subjectService.SubjectEntity.findOne(params.subject);
            newSub.sub_cupo--;
            const errors = await class_validator_1.validate(newSub);
            if (errors.length > 0) {
                response.redirect(`/student/edit?id=${request.query.id}&men=Classroom is Full`);
            }
            else {
                await this._subjectService.SubjectEntity.update(request.query.old, oldSub);
                await this._subjectService.SubjectEntity.update(params.subject, newSub);
                await this._StudentService.StudentEntity.update(request.query.id, student);
                response.redirect(`/student/?men=Student Updated:`);
            }
        }
        else {
            response.redirect(`/student/edit?id=${request.query.id}&men=Invalid Input`);
        }
    }
    async delete(request, params, response) {
        let idPar = request.query.id;
        let data = await this._StudentService.StudentEntity.findOne(idPar);
        await response.render("studentDelete", {
            stud: data
        });
    }
    async deleting(request, params, response) {
        console.log(request.query.id);
        console.log(params.subject);
        await this._StudentService.StudentEntity.delete(request.query.id);
        var subj = await this._subjectService.SubjectEntity.findOne(params.subject);
        console.log(subj);
        subj.sub_cupo++;
        await this._subjectService.SubjectEntity.update(params.subject, subj);
        response.redirect(`/student/?men=Student Deleted:`);
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
], StudentController.prototype, "list", null);
__decorate([
    common_1.Get("create"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
__decorate([
    common_1.Post("createForm"),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createForm", null);
__decorate([
    common_1.Get("edit"),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "edit", null);
__decorate([
    common_1.Post("updateForm"),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateForm", null);
__decorate([
    common_1.Get("delete"),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "delete", null);
__decorate([
    common_1.Post("deleting"),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleting", null);
__decorate([
    common_1.Get("red"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "red", null);
StudentController = __decorate([
    common_1.Controller("student"),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        subject_service_1.SubjectService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map