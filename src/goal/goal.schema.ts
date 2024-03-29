import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GoalDocument = Goal & Document;

const options: SchemaOptions = {
  timestamps: true
}

@Schema(options)
export class Goal {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) // 참조 필드 추가
  userId: string;

  @Prop()
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);