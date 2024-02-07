import { Injectable } from '@nestjs/common';
import { FocusRecordRepository } from './focus-record.repository';
import { FocusRecord } from './focus-record-schema';
import { FocusRecordDto } from './focus-record.model';

@Injectable()
export class FocusRecordService {
  constructor(private focusRecordRepository: FocusRecordRepository) {}

  // 모든 포커스 레코드 조회
  async getAllFocusRecord(): Promise<FocusRecord[]> {
    return await this.focusRecordRepository.getAllFocusRecords();
  }

  // id로 포커스 레코드 조회
  async getFocusRecordById(id: string): Promise<FocusRecordDto> {
    return await this.focusRecordRepository.getFocusRecordById(id);
  }

  // 포커스 레코드 생성
  async createFocusRecord(
    focusRecordDto: FocusRecordDto,
  ): Promise<FocusRecordDto> {
    return this.focusRecordRepository.createFocusRecord(focusRecordDto);
  }

  // 포커스 레코드 업데이트
  async updateFocusRecord(
    id: string,
    focusRecordDto: FocusRecordDto,
  ): Promise<FocusRecordDto> {
    return this.focusRecordRepository.updateFocusRecord(id, focusRecordDto);
  }

  // 포커스 레코드 삭제
  deletedFocusRecord(id: string) {
    this.focusRecordRepository.deleteFocusRecord(id);
  }
}
