import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {

  // validate the input 
  
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
