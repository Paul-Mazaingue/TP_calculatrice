import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';  

@Entity()
export class ErrorEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;
}