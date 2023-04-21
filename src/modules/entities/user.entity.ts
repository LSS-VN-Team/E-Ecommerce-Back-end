// import { first } from 'lodash';
import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserEntity {
  @Column({
    name: 'firstName',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  firstName: string;

  @Column({
    name: 'lastName',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  lastName: string;

  @Column({
    name: 'email',
    unique: true,
    nullable: false,
    type: 'text',
  })
  @Expose()
  email: string;

  @Column({
    name: 'password',
    nullable: false,
    type: 'text',
  })
  @Exclude()
  password: string;

  @Column('simple-array')
  @Expose()
  public cartList: [string];

  @Column('simple-array')
  @Expose()
  public oderList: [string];
}

export default UserEntity;
