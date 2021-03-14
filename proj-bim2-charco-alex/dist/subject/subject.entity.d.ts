import { StudentEntity } from '../student/student.entity';
export declare class SubjectEntity {
    id: number;
    sub_name: string;
    sub_cod: string;
    sub_fstart: Date;
    sub_fend: Date;
    sub_cupo: Number;
    students: StudentEntity[];
}
