import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from './task.model';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  // 모든 할 일 조회
  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  // id로 할 일 조회
  async getTaskById(id: string): Promise<TaskDto> {
    return this.taskModel.findById(id);
  }

  // 할 일 생성
  async createTask(taskDto: TaskDto): Promise<TaskDto> {
    return await this.taskModel.create(taskDto);
  }

  // 할 일 업데이트
  async updateTask(id: string, taskDto: TaskDto): Promise<TaskDto> {

    return await this.taskModel.findByIdAndUpdate(id, taskDto);
  }

  // 할 일 삭제
  async deleteTask(id: string) {
    const task = await this.taskModel.findById(id);
    const deletedTask = {
      ...task,
      isDeleted: true,
    };

    await this.taskModel.findByIdAndUpdate(id, deletedTask);
  }
}
