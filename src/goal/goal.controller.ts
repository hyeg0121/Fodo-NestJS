import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GoalService } from './goal.service';
import { GoalDto } from './goal.model';

@Controller('goals')
export class GoalController {

  constructor(private goalService: GoalService) {
  }

  // 모든 목표 조회
  @Get()
  getAllGoals() {
    return this.goalService.getAllGoals();
  }

  // id로 목표 조회
  @Get('/:id')
  getGoalById(@Param('id') id: string) {
    return this.getGoalById(id);
  }

  // 목표 생성
  @Post()
  createGoal(@Body() goalDto: GoalDto) {
    return this.goalService.createGoal(goalDto);
  }

  // 목표 업데이트
  @Put('/:id')
  updateGoal(@Param('id') id: string, @Body() goalDto: GoalDto) {
    return this.goalService.updateGoal(id, goalDto);
  }

  // 목표 삭제
  @Delete('/:id')
  deleteGoal(@Param('id') id: string) {
    this.goalService.deleteGoal(id);
    return 'success';
  }
}
