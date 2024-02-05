import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FocusModule } from './focus/focus.module';
import { FocusRecordModule } from './focus_record/focus_record.module';
import { FocusRecordModule } from './focus-record/focus-record.module';

@Module({
  imports: [UserModule, FocusModule, FocusRecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
