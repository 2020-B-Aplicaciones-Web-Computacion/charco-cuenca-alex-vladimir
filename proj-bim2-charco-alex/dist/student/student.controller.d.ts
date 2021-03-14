import { StudentService } from "./student.service";
import { SubjectService } from '../subject/subject.service';
export declare class StudentController {
    private _StudentService;
    private _subjectService;
    constructor(_StudentService: StudentService, _subjectService: SubjectService);
    list(request: any, response: any): Promise<void>;
    create(request: any, response: any): Promise<void>;
    createForm(params: any, response: any): Promise<void>;
    edit(request: any, response: any): Promise<void>;
    updateForm(request: any, params: any, response: any): Promise<void>;
    delete(request: any, params: any, response: any): Promise<void>;
    deleting(request: any, params: any, response: any): Promise<void>;
    red(response: any): void;
}
