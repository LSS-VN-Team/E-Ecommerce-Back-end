import { Expose } from 'class-transformer';
import { IsEmail, IsNumber, Min } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'StatisticsOfDay',
  database: process.env.POSTGRES_DB,
})
class StatisticsOfDayEntity extends IntegerIdEntity {
  @Column({
    type: 'simple-array',
  })
  @Expose()
  public orderList: string[];

  @Column({
    type: 'simple-array',
  })
  @Expose()
  public productStatistcsList: object[];

  @Column({
    nullable: false,
    type: 'float',
  })
  @Expose()
  @IsNumber()
  @Min(0)
  public total: number;
}

export default StatisticsOfDayEntity;
