import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type FocusDocument = Focus & Document;

const options: SchemaOptions = {
  timestamps: true
}

@Schema(options)
export class Focus {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) // 참조 필드 추가
  userId: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const FocusSchema = SchemaFactory.createForClass(Focus);
