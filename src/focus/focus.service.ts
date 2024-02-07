import { Injectable } from '@nestjs/common';
import { FocusRepository } from './focus.repository';
import { FocusDto } from './focus.model';

@Injectable()
export class FocusService {
  constructor(private focusRepository: FocusRepository) {}

  // 모든 포커스 조회
  async getAllFocus() {
    return await this.focusRepository.getAllFocus();
  }

  // id로 포커스 조회
  async getFocusById(id: string): Promise<FocusDto> {
    return await this.focusRepository.getFocusById(id);
  }

  // 포커스 생성
  async createFocus(focusDto: FocusDto): Promise<FocusDto> {
    return this.focusRepository.createFocus(focusDto);
  }

  // 포커스 업데이트
  async updateFocus(id: string, focusDto: FocusDto): Promise<FocusDto> {
    return this.focusRepository.updateFocus(id, focusDto);
  }

  // 포커스 삭제
  deleteFocus(id: string) {
    this.focusRepository.deleteFocus(id);
  }
}
