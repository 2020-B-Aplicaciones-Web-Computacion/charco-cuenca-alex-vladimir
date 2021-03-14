"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModule = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const subject_module_1 = require("../subject/subject.module");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./student.entity");
const student_controller_1 = require("./student.controller");
let studentModule = class studentModule {
};
studentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([student_entity_1.StudentEntity], "default"),
            subject_module_1.SubjectModule
        ],
        controllers: [
            student_controller_1.StudentController
        ],
        providers: [
            student_service_1.StudentService
        ],
        exports: [
            student_service_1.StudentService
        ],
    })
], studentModule);
exports.studentModule = studentModule;
//# sourceMappingURL=student.module.js.map