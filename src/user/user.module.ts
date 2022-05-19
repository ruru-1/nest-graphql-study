import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
})
export class UserModule {}
