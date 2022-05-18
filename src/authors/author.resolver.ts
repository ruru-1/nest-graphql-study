import {
  Resolver,
  Query,
  Int,
  ResolveField,
  Args,
  Parent,
} from '@nestjs/graphql';
import { Author } from './model/author.model';
import { AuthorsService } from './author.service';
import { PostsService } from '../posts/post.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author)
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
