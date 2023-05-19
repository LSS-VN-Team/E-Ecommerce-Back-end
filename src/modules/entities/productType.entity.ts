import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'ProductType',
  database: process.env.POSTGRES_DB,
})
class ProductTypeEntity extends IntegerIdEntity {
  @Column({
    nullable: false,
    type: 'text',
  })
  @Expose()
  public nameType: string;

  @Column('simple-array')
  @Expose()
  public productList: string[];
}

export default ProductTypeEntity;
