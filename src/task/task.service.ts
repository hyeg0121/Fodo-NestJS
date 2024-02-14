import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskDto } from './task.model';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  // 모든 할 일 조회
  async getAllTask() {
    return await this.taskRepository.getAllTasks();
  }

  // id로 할 일 조회
  async getTaskById(id: string): Promise<TaskDto> {
    return await this.taskRepository.getTaskById(id);
  }

  // 할 일 생성
  async createTask(taskDto: TaskDto): Promise<TaskDto> {
    return await this.taskRepository.createTask(taskDto);
  }

  // 할 일 업데이트
  async updateTask(id: string, taskDto: TaskDto): Promise<TaskDto> {
    return this.taskRepository.updateTask(id, taskDto);
  }

  // 할 일 삭제
  async deleteTask(id: string) {
    await this.taskRepository.deleteTask(id);
  }
}
