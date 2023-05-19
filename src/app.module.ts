import { Module } from '@nestjs/common';
// import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database.module';
// import { MainModule } from './modules/main.module';
import { CoreModule } from '@app/core';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/User/user.module';
// import { DatabaseModule } from '././database/database.module';
console.log();

@Module({
  imports: [
    AuthModule,
    // UserModule,
    CoreModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
