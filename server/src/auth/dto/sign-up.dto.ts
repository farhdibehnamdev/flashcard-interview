import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { IsPasswordMatch } from 'src/common/decorators/is-password-match.decorator';

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(8)
  @IsNotEmpty()
  password: string;
  @MinLength(8)
  @IsPasswordMatch('password')
  @IsNotEmpty()
  passwordConfirm: string;
}
