import { Int, Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { hello, User } from './user.model';
import {UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(returns => hello, { name: 'hello'})
  async HelloWorld() {
    return this.userService.HelloWorld();
  }
}