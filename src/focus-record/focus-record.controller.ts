import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FocusRecordService } from "./focus-record.service";
import { FocusRecordDto } from "./focus-record.model";


@Controller('focus-records')
export class FocusRecordController {
  constructor(private focusRecordService: FocusRecordService) {}

  @Get()
  getAllFocusRecords() {
    return this.focusRecordService.getAllFocusRecord();
  }

  @Get('/:id')
  getFocusRecord(@Param('id') id: string) {
    return this.focusRecordService.getFocusRecordById(id);
  }

  @Post()
  createFocusRecord(@Body() focusRecordDto: FocusRecordDto) {
    return this.focusRecordService.createFocusRecord(focusRecordDto);
  }

  @Put('/:id')
  updateFocusRecord(@Param('id') id: string, @Body() focusRecordDto: FocusRecordDto) {
    return this.focusRecordService.updateFocusRecord(id, focusRecordDto);
  }

  @Delete('/:id')
  deleteFocusRecord(@Param('id') id: string) {
    this.focusRecordService.deletedFocusRecord(id);
    return 'success';
  }
}
