import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Goal, GoalDocument } from './goal.schema';
import { Model } from 'mongoose';
import { GoalDto } from './goal.model';

@Injectable()
export class GoalRepository {
  constructor(@InjectModel(Goal.name) private goalModel: Model<GoalDocument>) {}

  // 모든 목표 조회
  async getAllGoals(): Promise<Goal[]> {
    return await this.goalModel.find().exec();
  }

  // id로 목표 조회
  async getGoalById(id: string): Promise<GoalDto> {
    return this.goalModel.findById(id);
  }

  // 목표 생성
  async createGoal(goalDto: GoalDto): Promise<GoalDto> {
    return await this.goalModel.create(goalDto);
  }

  // 목표 업데이트
  async updateGoal(id: string, goalDto: GoalDto): Promise<GoalDto> {
    const updatedGoal = {
      ...goalDto,
      updatedAt: new Date(),
    };

    const result = await this.goalModel.findByIdAndUpdate(id, updatedGoal, {
      new: true,
    });

    return result ? result.toObject() : null;
  }

  // 목표 삭제
  async deleteGoal(id: string) {
    const goal = await this.goalModel.findById(id);
    const deletedGoal = {
      ...goal,
      updatedAt: new Date(),
      isDeleted: true,
    };

    await this.goalModel.findByIdAndUpdate(id, deletedGoal);
  }
}
