import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SignUpUserDto } from "./dto/user.request.dto";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // 모든 유저 조회
  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // id로 유저 조회
  async getUserById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id);
  }

  // 유저 생성
  async createUser(userDto: SignUpUserDto): Promise<UserDocument> {
    return await this.userModel.create(userDto);
  }

  // 이메일로 유저 있는지 확인
  async existsByEmail(email: string): Promise<any> {
    const result = await this.userModel.exists({ email });
    console.log(result);
    return result;
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
