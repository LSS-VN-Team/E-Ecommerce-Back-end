import { Exclude } from 'class-transformer';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { Column, Entity } from 'typeorm';
@Entity({
  name: 'Oder',
  database: process.env.POSTGRES_DB,
})
class OrderEntity extends IntegerIdEntity {
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
