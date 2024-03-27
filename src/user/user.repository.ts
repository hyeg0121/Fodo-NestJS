import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto, UserDto } from "./user.model";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // 모든 유저 조회
  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // id로 유저 조회
  async getUserById(id: string): Promise<UserDto> {
    return this.userModel.findById(id);
  }

  // 유저 생성
  async createUser(userDto: CreateUserDto): Promise<UserDto> {
    return await this.userModel.create(userDto);
  }

  // 유저 업데이트
  async updateUser(id: string, userDto: UserDto) : Promise<UserDto> {
    return await this.userModel.findByIdAndUpdate(id, userDto);
  }

  // 유저 삭제
  async deleteUser(id: string) {
    const user = await this.userModel.findById(id);
    const deletedUser = {
      ...user,
      isDeleted: true,
    };
    await this.userModel.findByIdAndUpdate(id, deletedUser);
  }
}
