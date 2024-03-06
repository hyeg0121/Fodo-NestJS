import { Module } from '@nestjs/common';
import { FocusRecordController } from './focus-record.controller';
import { FocusRecordService } from './focus-record.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FocusRecordRepository } from './focus-record.repository';
import { FocusRecord, FocusRecordSchema } from "./focus-record.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FocusRecord.name, schema: FocusRecordSchema },
    ]),
  ],
  controllers: [FocusRecordController],
  providers: [FocusRecordRepository, FocusRecordService],
})
export class FocusRecordModule {}
