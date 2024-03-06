import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Focus, FocusDocument } from './focus.schema';
import { Model } from 'mongoose';
import { FocusDto } from './focus.model';

@Injectable()
export class FocusRepository {
  constructor(
    @InjectModel(Focus.name) private focusModel: Model<FocusDocument>,
  ) {}

  // 모든 포커스 조회
  async getAllFocus(): Promise<Focus[]> {
    return await this.focusModel.find().exec();
  }

  // id로 포커스 조회
  async getFocusById(id: string): Promise<FocusDto> {
    return this.focusModel.findById(id);
  }

  // 포커스 생성
  async createFocus(focusDto: FocusDto): Promise<FocusDto> {
    return await this.focusModel.create(focusDto);
  }

  // 포커스 업데이트
  async updateFocus(id: string, focusDto: FocusDto) : Promise<FocusDto> {
    const updatedFocus = {
      ...focusDto,
      updatedAt: new Date(),
    };
    await this.focusModel.findByIdAndUpdate(id, updatedFocus);

    return updatedFocus;
  }

  // 포커스 삭제
  async deleteFocus(id: string) {
    const focus = await this.focusModel.findById(id);
    const deletedFocus = {
      ...focus,
      updatedAt: new Date(),
      isDeleted: true,
    };
    await this.focusModel.findByIdAndUpdate(id, deletedFocus);
  }
}
