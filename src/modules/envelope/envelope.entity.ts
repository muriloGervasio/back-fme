import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('envelope')
export class Envelope {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  budget: number;

  @Column()
  value: number;

  @Column()
  showBurndown: boolean;
}
