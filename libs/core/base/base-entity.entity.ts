import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @Column({
    name: 'CreatedTime',
    type: 'timestamptz',
    default: () => 'NOW()',
    nullable: true,
  })
  @Expose()
  createdTime?: Date;

  @Column({
    name: 'UpdatedTime',
    type: 'timestamptz',
    default: () => 'NOW()',
    nullable: true,
  })
  @Expose()
  updatedTime?: Date;

  @DeleteDateColumn({
    name: 'DeletedTime',
    type: 'timestamptz',
    nullable: true,
  })
  @Expose()
  deletedTime?: Date;
}
