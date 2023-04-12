import { hash } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Announcements } from "./announcement.entity";
import { Comments } from "./comments.entity";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 11, unique: true })
  cellPhone: string;

  @Column({ length: 8 })
  birthdate: string;

  @Column({ length: 250 })
  password: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ default: true })
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isBuyer: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10);
    }
  }

  @OneToOne(() => Addresses, (address) => address.user)
  @JoinColumn()
  address: Addresses;

  @OneToMany(() => Announcements, (announcement) => announcement.user)
  announcement: Announcements[];

  @OneToMany(() => Comments, (comment) => comment.user)
  comment: Comments[];
}
