// /** alpha.module.ts */
// import { AlphaController }
// import { AlphaService }
// import { BetaModule }
//
// @Module({
//   imports: [BetaModule],
//   controllers: [AlphaController],
//   providers: [AlphaService],
//   exports: [],
// })
// /** alpha.controller.ts */
// import { AlphaService } from './alpha.service';
// import { BetaService } from '../beta/beta.service';
//
//
//  @Controller()
//  export class AlphaController {
//   constructor(
//     private readonly alphaService: AlphaService,
//     private readonly betaService: BetaService,
//     ) {}
//
//   @Get()
//   getHello(): string {
//     this.alphaService.detailedMethodOne();
//   }
//
//   @Post()
//   getSomething(): string {
//     this.betaService.delegatedMethod();
//   }
// }
//
// /** What module does in runtime */
//   // DI by newly created objects
//  const alphaController= new AlphaController(new AlphaService, new BetaService)
//
//
// /** alpha.service.ts */
// @Injectable()
// export class AlphaService {
//   detailedMethodOne() {}
//   detailedMethodTwo() {}
// }
//
// /** beta.module.ts */
// @Module({
//   providers: [BetaService],
//   controllers: [BetaController],
//   exports: [BetaService]
// })
// export class BetaModule {} // Encapsulation
//
// /** beta.controller.ts */
// @Controller()
// export class BetaController {
//   constructor(private readonly betaService: BetaService) {}
//
//   @Get()
//   getCat(): Array<string> {
//     return ['1', '2'];
//   }
//
//   @Post()
//   postCat(): any {
//     this.betaService.delegatedMethod();
//   }
// }
//
// /** beta.service.ts */
// @Injectable()
// export class BetaService {
//   delegatedMethod() {}
// }
//
// const betaController = new BetaController(new BetaService());
// const betaModule = new BetaModule();
// /**
//  betaModule (live Object)
//   - public new BetaService();
//   - private new BetaResolver();
//   - private new BetaController();
//
//  alphaModule (live Object)
//   - (*imported) betaModule: referenced
//
//   - private new AlphaService();
//   - private new AlphaController();
//  */
//
// /**
//  @Module({})
//  export class ConfigModule {
//   static register(): DynamicModule {
//     return {
//       module: ConfigModule,
//       providers: [ConfigService],
//       exports: [ConfigSerivce],
//     }
//   }
//  }
//  */
//
// /**
//  src/author/
//   author.module.ts
//   author.service.ts
//   (author.controller.ts)
//   author.resolver.ts
//   /interface
//   /model
//   /dto
//
//   / author.service.ts /
//   @Injectable()
//   export class AuthorService {
//
//   /model
//
//   @ObjectType()
//   export class Author {
//     @Field((type) => Int)
//     id: number;
//
//     @Field({ nullable: true })
//     firstName?: string;
//
//     @Field({ nullable: true })
//     lastName?: string;
//
//     @Field((type) => [Post])
//   }
//   }
//  */
