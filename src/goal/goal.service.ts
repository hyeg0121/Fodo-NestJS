import { Injectable } from '@nestjs/common';
import { GoalRepository } from './goal.repository';
import { GoalDto } from './goal.model';

@Injectable()
export class GoalService {
  constructor(private goalRepository: GoalRepository) {}

  // 모든 목표 조회
  async getAllGoals() {
    return await this.goalRepository.getAllGoals();
  }

  // id로 목표 조회
  async getGoalById(id: string): Promise<GoalDto> {
    return await this.goalRepository.getGoalById(id);
  }

  // 목표 만들기
  async createGoal(goalDto: GoalDto): Promise<GoalDto> {
    return await this.goalRepository.createGoal(goalDto);
  }

  // 목표 업데이트
  async updateGoal(id: string, goalDto: GoalDto): Promise<GoalDto> {
    return this.goalRepository.updateGoal(id, goalDto);
  }

  // 목표 삭제
  async deleteGoal(id: string) {
    await this.goalRepository.deleteGoal(id);
  }
}
