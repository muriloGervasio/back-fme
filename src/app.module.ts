import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvelopeModule } from './modules/envelope/envelope.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'configuration/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          username: configService.get('database.username'),
          password: configService.get('database.password'),
          schema: configService.get('database.schema'),
          database: configService.get('database.database'),
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
    EnvelopeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
