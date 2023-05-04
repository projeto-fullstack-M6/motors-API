import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Users } from "./users.entity";
import { Comments } from "./comments.entity";
// import { Images } from "./images.entity";

@Entity("announcement")
export class Announcements {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column({ length: 50 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 50 })
  fuel: string;

  @Column({ length: 50 })
  color: string;

  @Column({ type: "decimal", precision: 15, scale: 2, default: 0 })
  km: string;

  @Column({ length: 50 })
  fipePrice: string;

  @Column({ type: "decimal", precision: 15, scale: 2, default: 0 })
  price: string;

  @Column({ type: "text", nullable: true })
  description: string | null;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  isGoodToSale: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Users, (user) => user.announcement)
  user: Users;

  @OneToMany(() => Comments, (comment) => comment.announcement)
  comment: Comments[];

  @Column({ type: "text", array: true, default: "{}", nullable: true })
  images: string[];
}
