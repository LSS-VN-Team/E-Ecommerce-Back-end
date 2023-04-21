import { Expose } from 'class-transformer';
import { IsEmail, IsNumber, Max, Min } from 'class-validator';
import { BaseEntity } from 'libs/core/base/base-entity.entity';
import { text } from 'stream/consumers';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductTypeEntity from './productType.entity';

@Entity()
class ProductEntity extends BaseEntity {
  @Column({
    nullable: false, 
    type:'text'})
  @Expose()
  public name: string;


  @Column({
    nullable: false, 
    type:'float'})
  @Expose()
  @IsNumber()
  @Min(0)
  public price: null;

  @Column({
    nullable: false, 
    type:'float'})
  @Expose()
  @IsNumber()
  @Min(0)
  public amount: number;

  @ManyToOne(()=>ProductTypeEntity, u=> u.nameType)
  @Expose()
  public type: string;

  @Column({
    nullable: false, 
    type:'float'})
  @Expose()
  @IsNumber()
  @Min(0)
  @Max(100)
  public size: number;

  @Column({
    nullable: true,
    type:'text'
  })
  @Expose()
  public color:string;

  @Column({
    nullable: true,
    type:'text'
  })
  @Expose()
  public material:string;

  // @Column({
  //   nullable: true,
  //   type:'image'
  // })
  // @Expose()
  // public imageSource:imag;

  @Column('simple-array')
  @Expose()
  public evaluateList: string[];

  @Column({
    nullable: true,
    type: 'text'
  })
  @Expose()
  public description: string;

  @Column('simple-array')
  @Expose()
  public productList: string[];

}

export default ProductEntity;
