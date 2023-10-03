import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../config/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  role_id: string;
}
