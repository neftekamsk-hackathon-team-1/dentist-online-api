import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'services' })
export class Service {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updated_at: Date;

  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  title: string;
}
