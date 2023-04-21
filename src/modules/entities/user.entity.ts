import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserEntity extends BaseEntity {
  @Column({
    nullable: false,
    type: 'text',
  })
  @Expose()
  public firstName: string;

  @Column({
    nullable: false,
    type: 'text',
  })
  @Expose()
  public lastName: string;

  @Column({
    unique: true,
    nullable: false,
    type: 'text',
  })
  @IsEmail()
  @Expose()
  public email: string;

  @Column({
    nullable: false,
    type: 'text',
  })
  @Expose()
  public password: string;

  @Column({ nullable: false, default: false })
  @Expose()
  public admin: boolean;

  @Column('simple-array')
  @Expose()
  public cartList: string[];

  @Column('simple-array')
  @Expose()
  public orderList: string[];
}

export default UserEntity;
