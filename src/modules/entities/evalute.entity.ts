import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

@Entity()
class EvaluteEntity {
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

  @Column({
    name: 'createdAt',
    nullable: false,
    default: () => 'NOW()',
    type: 'timestamptz',
  })
  @Exclude()
  createdAt: string;

  @Column({
    name: 'undatedAt',
    nullable: false,
    type: 'timestamptz',
  })
  @Exclude()
  undatedAt: string;
}
export default EvaluteEntity;
