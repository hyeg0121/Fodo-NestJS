import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FocusService } from "./focus.service";
import { FocusDto } from "./focus.model";


@Controller('focus')
export class FocusController {
  constructor(private focusService: FocusService) {}

  @Get()
  getAllFocus() {
    return this.focusService.getAllFocus();
  }

  @Get('/:id')
  getFocus(@Param('id') id: string) {
    return this.focusService.getFocusById(id);
  }

  @Post()
  createFocus(@Body() focusDto: FocusDto) {
    return this.focusService.createFocus(focusDto);
  }

  @Put('/:id')
  updateFocus(@Param('id') id: string, @Body() focusDto: FocusDto) {
    return this.focusService.updateFocus(id, focusDto);
  }

  @Delete('/:id')
  deleteFocus(@Param('id') id: string) {
    this.focusService.deleteFocus(id);
    return 'success';
  }
}
