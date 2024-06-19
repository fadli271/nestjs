import { Module } from '@nestjs/common';
import { userService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [userService],
  controllers: [UserController],
})
export class UserModule {}
