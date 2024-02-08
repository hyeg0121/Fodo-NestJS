export interface GoalDto {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  idsDeleted: boolean;
}