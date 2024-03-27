import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FocusRecordDto } from './focus-record.model';
import { FocusRecord, FocusRecordDocument } from './focus-record.schema';

@Injectable()
export class FocusRecordRepository {
  constructor(
    @InjectModel(FocusRecord.name) private focusRecordModel: Model<FocusRecordDocument>,
  ) {}

  // 모든 포커스 레코드 조회
  async getAllFocusRecords(): Promise<FocusRecord[]> {
    return await this.focusRecordModel.find().exec();
  }

  // id로 포커스 레코드 조회
  async getFocusRecordById(id: string): Promise<FocusRecordDto> {
    return this.focusRecordModel.findById(id);
  }

  // 포커스 레코드 생성
  async createFocusRecord(focusRecordDto: FocusRecordDto): Promise<FocusRecordDto> {
    return await this.focusRecordModel.create(focusRecordDto);
  }

  // 포커스 레코드 업데이트
  async updateFocusRecord(id: string, focusRecordDto: FocusRecordDto) : Promise<FocusRecordDto> {
    return await this.focusRecordModel.findByIdAndUpdate(id, focusRecordDto);
  }

  // 포커스 레코드 삭제
  async deleteFocusRecord(id: string) {
    const focusRecord = await this.focusRecordModel.findById(id);
    const deletedFocusRecord = {
      ...focusRecord,
      isDeleted: true,
    };
    await this.focusRecordModel.findByIdAndUpdate(id, deletedFocusRecord);
  }
}
