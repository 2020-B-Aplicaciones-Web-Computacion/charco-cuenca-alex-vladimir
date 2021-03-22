import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString, IsUppercase, Length,

} from 'class-validator';
import { MaxDate } from 'class-validator';


export class SubjectDTO{

  @IsString()
  @IsNotEmpty()
  @Length(3,25)
  sub_name:String
  @IsString()
  @IsNotEmpty()
  @IsUppercase()
  @Length(7,7)
  sub_cod:String
  @IsNumber()
  @IsNotEmpty()
  sub_cupo:Number
  @IsNotEmpty()
  @IsDate()
  sub_fstart:Date
  @IsNotEmpty()
  @IsDate()
  sub_fend:Date


}