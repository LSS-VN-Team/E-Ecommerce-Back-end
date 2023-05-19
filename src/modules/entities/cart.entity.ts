// import { fail } from 'assert';
import { Exclude, Expose } from 'class-transformer';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'Cart',
  database: process.env.POSTGRES_DB,
})
class CartEntity extends IntegerIdEntity {
  @Column({
    name: 'idUser',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  idUser: string;

  @Column({
    name: 'idProduct',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  idProduct: string;

  @Column({
    name: 'price',
    nullable: false,
    type: 'float',
  })
  @Expose()
  price: number;

  @Column({
    name: 'amount',
    nullable: false,
    type: 'float',
  })
  @Expose()
  amount: number;

  @Column({
    name: 'total',
    nullable: false,
    type: 'float',
  })
  @Expose()
  total: number;
}
export default CartEntity;
