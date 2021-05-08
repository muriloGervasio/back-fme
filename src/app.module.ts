import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvelopeModule } from './modules/envelope/envelope.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rabisco',
      schema: 'fme',
      synchronize: true,
      autoLoadEntities: true,
    }),
    EnvelopeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
