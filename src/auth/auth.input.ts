import { IsNotEmpty, IsString } from 'class-validator';

export class SigninInput {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  passsword: string;
}
