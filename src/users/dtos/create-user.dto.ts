import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {

  // vlaidate the inout for create or insert 

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
