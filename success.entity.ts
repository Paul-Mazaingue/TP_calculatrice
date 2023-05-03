import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';

@Entity()
export class Success {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timeTakenMs: number;

  @CreateDateColumn()
  createdAt: Date;
}
