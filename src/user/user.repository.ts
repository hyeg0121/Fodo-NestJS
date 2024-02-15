import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { Injectable } from "@nestjs/common";
import { CreateUserDto, UserDto } from "./user.model";

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
    const updatedUser = {
      ...userDto,
      updatedAt: new Date(),
    };
    await this.userModel.findByIdAndUpdate(id, updatedUser);

    return updatedUser;
  }

  // 유저 삭제
  async deleteUser(id: string) {
    const user = await this.userModel.findById(id);
    const deletedUser = {
      ...user,
      updatedAt: new Date(),
      isDeleted: true,
    };
    await this.userModel.findByIdAndUpdate(id, deletedUser);
  }
}
