import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FocusRecordDocument = FocusRecord & Document;

@Schema()
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

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const FocusRecordSchema = SchemaFactory.createForClass(FocusRecord);
