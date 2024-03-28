import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post
} from '@nestjs/common';
import { SignUpUserDto } from './dto/user.request.dto';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() userDto: SignUpUserDto) {
    return this.userService.signUpUser(userDto);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
    return 'success';
  }
}
