import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envelope } from './envelope.entity';

@Injectable()
export class EnvelopeService {
  constructor(
    @InjectRepository(Envelope)
    private envelopeRepository: Repository<Envelope>,
  ) {}

  findAll() {
    return this.envelopeRepository.find();
  }

  create(envelope: Envelope) {
    return this.envelopeRepository.save(envelope);
  }
}
