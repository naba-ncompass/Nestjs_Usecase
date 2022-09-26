import { Expose } from 'class-transformer';

export class UserDto {
  // class tranformation for users 
  @Expose()
  id: number;

  @Expose()
  email: string;
}
