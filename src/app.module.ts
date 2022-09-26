import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
const cookieSession = require('cookie-session');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report], // database name which we need to updated 
      synchronize: true, // (property) synchronize?: boolean Indicates if database schema should be auto created on every application launch. 
    }),
    // typeOrm module for connecting to sqlite 
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true, // If set to true validator will strip validated object of any properties that do not have any decorators.
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {   // work as the Interface defining method for applying user defined middleware to routes.
    consumer
      .apply(
        cookieSession({
          keys: ['asdfasfd'],
        }),
      )
      .forRoutes('*');
  }
}

// UsersModule,
// ReportsModule,
// ],
// controllers: [AppController],
// providers: [AppService],
// })


// @Module({
// imports: [
// ConfigModule.forRoot({
//   isGlobal: true
// }),
// TypeOrmModule.forRootAsync({
//   inject: [ConfigService],
//   useFactory: (config: ConfigService) => {
//     return {
//       type: 'sqlite',
//       database: config.get<string>('DB_NAME'),
//       synchronize: true,
//       entities: [User, Report],
//     };
//   },
// }),
