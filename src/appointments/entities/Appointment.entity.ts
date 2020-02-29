import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Service } from '../../services/entities/Service.entity';
import { Specialist } from '../../specialists/entities/Specialist.entity';

@Entity({ name: 'appointments' })
export class Appointment {
  @ApiProperty()
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @ApiProperty()
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updated_at: Date;

  @ApiPropertyOptional()
  @Column({ type: 'timestamptz', nullable: true })
  date?: Date;

  @ApiPropertyOptional()
  @Column({ type: 'varchar', nullable: true })
  phone?: string;

  @ApiPropertyOptional()
  @Column({ type: 'integer', nullable: true })
  specialist_id?: number;

  @ApiPropertyOptional()
  @Column({ type: 'integer', nullable: true })
  service_id?: number;

  @ManyToOne(type => Specialist, { nullable: true })
  @JoinColumn({ name: 'specialist_id', referencedColumnName: 'id' })
  specialist?: Specialist;

  @ManyToOne(type => Service, { nullable: true })
  @JoinColumn({ name: 'service_id', referencedColumnName: 'id' })
  service?: Service;
}
