import { Expose } from 'class-transformer';
import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class IntegerIdEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'Id',
    type: 'integer',
  })
  @Expose()
  id?: number;
}
