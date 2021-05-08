import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Envelope } from './envelope.entity';
import { EnvelopeService } from './envelope.service';

@Controller('envelope')
export class EnvelopeController {
  constructor(private envelopeService: EnvelopeService) {}

  @Get('working')
  working() {
    return 12312;
  }

  @Get()
  getEnvelopes() {
    return this.envelopeService.findAll();
  }

  @Post()
  createEnvelope(@Body() envelope: Envelope) {
    return this.envelopeService.create(envelope);
  }
}
