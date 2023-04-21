// import { fail } from 'assert';
import { Exclude, Expose } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity()
class CartEntity {
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
    type: 'number',
  })
  @Expose()
  price: number;

  @Column({
    name: 'amount',
    nullable: false,
    type: 'number',
  })
  @Expose()
  amount: number;

  @Column({
    name: 'totol',
    nullable: false,
    type: 'number',
  })
  @Expose()
  totol: number;
}
export default CartEntity;
