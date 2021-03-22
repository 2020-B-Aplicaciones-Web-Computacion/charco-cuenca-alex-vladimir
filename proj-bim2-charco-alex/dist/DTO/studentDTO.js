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
exports.StudentDTO = void 0;
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
class StudentDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(3, 15),
    __metadata("design:type", String)
], StudentDTO.prototype, "nom_stud", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(3, 15),
    __metadata("design:type", String)
], StudentDTO.prototype, "ape_stud", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn(['male', 'female']),
    __metadata("design:type", String)
], StudentDTO.prototype, "gen_stud", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    class_validator_1.MinDate(new Date(1979, 12, 31)),
    class_validator_2.MaxDate(new Date(2002, 1, 1)),
    __metadata("design:type", Date)
], StudentDTO.prototype, "fnac_stud", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsPositive(),
    __metadata("design:type", Number)
], StudentDTO.prototype, "subid_stud", void 0);
exports.StudentDTO = StudentDTO;
//# sourceMappingURL=studentDTO.js.map