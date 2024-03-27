import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type FocusRecordDocument = FocusRecord & Document;

const options: SchemaOptions = {
  timestamps: true
}

@Schema(options)
export class FocusRecord {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Focus' }) // 참조 필드 추가
  focusId: string;

  @Prop()
  concentrateSeconds: number;

  @Prop()
  memo: string;

  @Prop()
  uploadedImagePath: string = "image";

  @Prop({ default: false })
  isDeleted: boolean;
}

export const FocusRecordSchema = SchemaFactory.createForClass(FocusRecord);
