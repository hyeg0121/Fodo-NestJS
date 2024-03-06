export interface TaskDto {
  id: string;
  goalId: string;
  isCompleted: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
