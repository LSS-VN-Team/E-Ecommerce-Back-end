import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { IntegerIdEntity } from 'libs/core/base/integer-id-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'User',
  database: process.env.POSTGRES_DB,
})
class UserEntity extends IntegerIdEntity {
  @Column({
    nullable: true,
    type: 'text',
  })
  @Expose()
  public name: string;

  @Column({
    unique: true,
    nullable: true,
    type: 'text',
  })
  @IsEmail()
  @Expose()
  public email: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  @Expose()
  public password: string;

  @Column({ nullable: false, default: false })
  @Expose()
  public admin: boolean;

  @Column({ nullable: true, type: 'varchar' })
  @Expose()
  public cartList: string[];

  @Column({ nullable: true, type: 'varchar' })
  @Expose()
  public orderList: string[];
}

export default UserEntity;
