import { Exclude } from 'class-transformer';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'Evalute',
  database: process.env.POSTGRES_DB,
})
class EvaluteEntity extends IntegerIdEntity {
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
    name: 'cmt',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  cmt: string;

  @Column({
    name: 'oneToTen',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  oneToTen: string;
}
export default EvaluteEntity;
