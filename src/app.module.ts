import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FocusModule } from './focus/focus.module';
import { FocusRecordModule } from './focus-record/focus-record.module';
import { GoalModule } from './goal/goal.module';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fodo'),
    UserModule,
    FocusModule,
    FocusRecordModule,
    GoalModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
