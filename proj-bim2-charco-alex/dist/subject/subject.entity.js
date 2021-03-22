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
exports.SubjectEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const student_entity_1 = require("../student/student.entity");
let SubjectEntity = class SubjectEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 100,
        nullable: false,
        name: "sub_name"
    }),
    __metadata("design:type", String)
], SubjectEntity.prototype, "sub_name", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 7,
        nullable: false,
        unique: true,
        name: "sub_cod"
    }),
    __metadata("design:type", String)
], SubjectEntity.prototype, "sub_cod", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        nullable: false,
        name: "sub_fstart"
    }),
    __metadata("design:type", Date)
], SubjectEntity.prototype, "sub_fstart", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        nullable: false,
        name: "sub_fend"
    }),
    __metadata("design:type", Date)
], SubjectEntity.prototype, "sub_fend", void 0);
__decorate([
    typeorm_1.Column({
        type: "int",
        nullable: false,
        name: "sub_cupo"
    }),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "sub_cupo", void 0);
__decorate([
    typeorm_1.OneToMany(type => student_entity_1.StudentEntity, student => student.fkSubject),
    __metadata("design:type", Array)
], SubjectEntity.prototype, "students", void 0);
SubjectEntity = __decorate([
    typeorm_1.Entity("subject")
], SubjectEntity);
exports.SubjectEntity = SubjectEntity;
//# sourceMappingURL=subject.entity.js.map