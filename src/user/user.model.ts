import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export interface UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImagePath: string;
  bio: string;
  created_at: Date;
  updated_at?: Date;
}

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  // 8자 이상의 암호이며, 대문자, 소문자, 숫자, 특수 문자 중 하나 이상을 포함
  @IsStrongPassword()
  password: string;
}
