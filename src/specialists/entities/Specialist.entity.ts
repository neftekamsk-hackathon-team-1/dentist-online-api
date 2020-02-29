import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Service } from '../../services/entities/Service.entity';

@Entity({ name: 'specialists' })
export class Specialist {
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
  full_name: string;

  @ApiProperty()
  @Column({ type: 'text', nullable: false })
  about: string;

  @ManyToMany(type => Service)
  @JoinTable({
    name: 'specialists_services',
    joinColumn: {
      name: 'specialist_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'service_id',
      referencedColumnName: 'id',
    },
  })
  services: Service[];
}
