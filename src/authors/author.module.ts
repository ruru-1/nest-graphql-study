import { Module } from '@nestjs/common';
import { PostsModule } from '../posts/post.module';
import { AuthorsResolver } from './author.resolver';
import { AuthorsService } from './author.service';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
