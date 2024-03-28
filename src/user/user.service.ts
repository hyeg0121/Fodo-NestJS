import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignUpUserDto } from './dto/user.request.dto';
import { UserRepository } from './user.repository';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  // 모든 유저 조회
  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }

  // id로 유저 조회
  async getUserById(id: string): Promise<UserDocument> {
    return await this.userRepository.getUserById(id);
  }

  // 유저 생성
  async signUpUser(userDto: SignUpUserDto): Promise<UserDocument> {
    const { name, email, password } = userDto;
    const isUserExist = await this.userRepository.existsByEmail(email);

    if (isUserExist) {
      throw new UnauthorizedException('해당 이메일로 가입한 계정이 존재합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));

    const user = await this.userRepository.createUser({
      name,
      email,
      password: hashedPassword
    });

    return user;
  }

  // 유저 삭제
  deleteUser(id: string) {
    this.userRepository.deleteUser(id);
  }
}
