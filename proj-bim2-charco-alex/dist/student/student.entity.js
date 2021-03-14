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
exports.StudentEntity = void 0;
const typeorm_1 = require("typeorm");
const subject_entity_1 = require("../subject/subject.entity");
let StudentEntity = class StudentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StudentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100,
        nullable: false,
        name: "nom_stud"
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "nom_stud", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100,
        nullable: false,
        name: "ape_stud"
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "ape_stud", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100,
        nullable: false,
        name: "gen_stud"
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "gen_stud", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        nullable: false,
        name: "fnac_Stud"
    }),
    __metadata("design:type", Date)
], StudentEntity.prototype, "fnac_stud", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false,
        name: "subid_stud"
    }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "subid_stud", void 0);
__decorate([
    typeorm_1.ManyToOne(type => subject_entity_1.SubjectEntity, subject => subject.students),
    __metadata("design:type", Object)
], StudentEntity.prototype, "fkSubject", void 0);
StudentEntity = __decorate([
    typeorm_1.Entity("student")
], StudentEntity);
exports.StudentEntity = StudentEntity;
//# sourceMappingURL=student.entity.js.map