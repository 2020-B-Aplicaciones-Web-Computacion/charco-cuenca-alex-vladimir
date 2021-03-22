//DTO-FORM CREATE

import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFormDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  name: string;
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  @IsNumberString()
  ci: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  age: number;
  @IsOptional()
  @IsIn([true, false])
  single: boolean;
}
