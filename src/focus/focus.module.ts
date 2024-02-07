import { Module } from '@nestjs/common';
import { FocusController } from './focus.controller';
import { FocusService } from './focus.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Focus, FocusSchema } from "./focus.schema";
import { FocusRepository } from "./focus.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Focus.name, schema: FocusSchema }]),
  ],
  controllers: [FocusController],
  providers: [FocusRepository, FocusService]
})
export class FocusModule {}
