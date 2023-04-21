import { Exclude } from 'class-transformer';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { Column, Entity } from 'typeorm';
@Entity()
class OrderEntity extends BaseEntity {
  @Column({
    name: 'idUser',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  idUser: string;

  @Column({
    name: 'idCart',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  idCart: string;

  @Column({
    name: 'method',
    type: 'text',
  })
  @Exclude()
  method: string;

  @Column({
    name: 'status',
    type: 'text',
  })
  @Exclude()
  status: string;

  @Column({
    name: 'time',
    nullable: false,
    type: 'timestamptz',
  })
  @Exclude()
  time: string;

  @Column({
    name: 'reason',
    type: 'text',
  })
  @Exclude()
  reason: string;
}
export default OrderEntity;
