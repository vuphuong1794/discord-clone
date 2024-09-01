import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ServerModule } from './server/server.module';
import { ProfileModule } from './profile/profile.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    //serve static cua nestjs giup hien thi anh ra giao dien frontend
    //hien tai dang o folder src nen se cd ra thu muc backend
    //de dung duoc nhung folder chung (luu tru anh va hien thi o giao dien nguoi dung )
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),

    //chi cho phep nhung user da dang nhap vao he thong
    GraphQLModule.forRootAsync({
      imports: [],
      inject: [], //them cac dich vu
      driver: ApolloDriver,
      useFactory: async ()=>{
        return {
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          subscriptions: {},
        }
      }
    }),
    ServerModule,
    ProfileModule,
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
