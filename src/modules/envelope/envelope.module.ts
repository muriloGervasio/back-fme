import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvelopeController } from './envelope.controller';
import { Envelope } from './envelope.entity';
import { EnvelopeService } from './envelope.service';

@Module({
  imports: [TypeOrmModule.forFeature([Envelope])],
  providers: [EnvelopeService],
  controllers: [EnvelopeController],
})
export class EnvelopeModule {}
