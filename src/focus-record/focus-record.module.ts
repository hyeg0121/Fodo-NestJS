import { Module } from '@nestjs/common';
import { FocusRecordController } from './focus-record.controller';
import { FocusRecordService } from './focus-record.service';

@Module({
  controllers: [FocusRecordController],
  providers: [FocusRecordService]
})
export class FocusRecordModule {}
