import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TaskDocument = Task & Document;

const options: SchemaOptions = {
  timestamps: true
}

@Schema(options)
export class Task {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Goal' })
  goalId: string;

  @Prop()
  content: string;

  @Prop({ default: false })
  isCompleted: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
