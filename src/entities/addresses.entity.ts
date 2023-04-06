import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Users } from "./users.entity";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  zipcode: string;

  @Column({ length: 50 })
  state: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 150 })
  street: string;

  @Column({ length: 8 })
  number: string;

  @Column({ length: 200 })
  complement: string;

  @OneToOne(() => Users, (user) => user.address)
  user: Users;
}
