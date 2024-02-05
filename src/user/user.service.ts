import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './user.model';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  // 모든 유저 조회
  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }

  // id로 유저 조회
  async getUserById(id: string): Promise<UserDto> {
    return await this.userRepository.getUserById(id);
  }

  // 유저 생성
  async createUser(userDto: UserDto): Promise<UserDto> {
    return this.userRepository.createUser(userDto);
  }

  // 유저 업데이트
  async updateUser(id: string, userDto: UserDto): Promise<UserDto> {
    return this.userRepository.updateUser(id, userDto);
  }

  // 유저 삭제
  deleteUser(id: string) {
    this.userRepository.deleteUser(id);
  }
}
