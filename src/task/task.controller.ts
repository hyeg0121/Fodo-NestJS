import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.model';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // 모든 할 일 조회
  @Get()
  getAllTask() {
    return this.taskService.getAllTask();
  }

  // id로 할 일 조회
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  // 할 일 생성
  @Post()
  createTask(@Body() taskDto: TaskDto) {
    return this.taskService.createTask(taskDto);
  }

  // 할 일 업데이트
  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return this.taskService.updateTask(id, taskDto);
  }

  // 할 일 삭제
  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return 'success';
  }
}
