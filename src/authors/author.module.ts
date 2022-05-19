import { Module } from '@nestjs/common';
import { PostsModule } from '../posts/post.module';
import { AuthorsResolver } from './author.resolver';
import { AuthorsService } from './author.service';
import { PostsService } from '../posts/post.service';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsService],
})
export class AuthorsModule {}

/**
 @Table
 export class User extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
 }
 */
