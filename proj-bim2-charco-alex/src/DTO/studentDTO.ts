import {
  IsDate,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber, IsNumberString,
  IsPositive,
  IsString, Length,
  MinDate,
} from 'class-validator';
import { MaxDate } from 'class-validator';


export class StudentDTO{

  @IsString()
  @IsNotEmpty()
  @Length(3,15)
  nom_stud:String
  @IsString()
  @IsNotEmpty()
  @Length(3,15)
  ape_stud:String
  @IsString()
  @IsNotEmpty()
  @IsIn(['male','female'])
  gen_stud:String
  @IsNotEmpty()
  @IsDate()
  @MinDate(new Date(1979,12,31))
  @MaxDate(new Date(2002,1,1))
  fnac_stud:Date
  @IsInt()
  @IsPositive()
  subid_stud:Number

}