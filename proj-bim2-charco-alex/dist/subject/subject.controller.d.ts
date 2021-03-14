import { SubjectService } from "./subject.service";
export declare class SubjectController {
    private _subjectService;
    constructor(_subjectService: SubjectService);
    list(request: any, response: any): Promise<void>;
    create(request: any, response: any): Promise<void>;
    createSubject(params: any, response: any): Promise<void>;
    updateSubject(request: any, params: any, response: any): Promise<void>;
    delete(request: any, response: any): Promise<void>;
    deleting(request: any, response: any): Promise<void>;
    update(request: any, response: any): Promise<void>;
    red(response: any): void;
}
