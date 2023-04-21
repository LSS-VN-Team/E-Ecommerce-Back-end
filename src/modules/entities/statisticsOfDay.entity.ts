import { Expose } from 'class-transformer';
import { IsEmail, IsNumber, Min } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class StatisticsOfDayEntity extends BaseEntity {
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
    type:'float'
  })
  @Expose()
  @IsNumber()
  @Min(0)
  public total: number;

  
}

export default StatisticsOfDayEntity;
