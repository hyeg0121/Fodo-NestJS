import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

const options: SchemaOptions = {
  timestamps: true
}

@Schema(options)
export class User {
  @Prop()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({ unique: true })
  @IsString()
  @IsNotEmpty()
  email: string;

  @Prop({ required: true, })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({ default: 'image' })
  @IsString()
  profileImagePath: string;

  @Prop({ default: '아직 소개말이 없습니다.' })
  @IsString()
  bio: string;

  readonly readOnlyData: {id: string, email: string, name: string, profileImagePath: string, bio: string}
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    profileImagePath: this.profileImagePath,
    bio: this.bio
  }
})
