import { Expose } from 'class-transformer';
import { PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base-entity.entity';

export abstract class StringIdEntity extends BaseEntity {
  @PrimaryColumn()
  @Expose()
  id?: string;
}
