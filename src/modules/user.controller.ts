import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UserInput } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Get()
    async HelloWorld() {
  }
}