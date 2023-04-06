import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Users } from "./users.entity";
import { Comments } from "./comments.entity";

@Entity("announcement")
export class Announcements {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column({ length: 50 })
  model: string;

  @Column({ type: "integer" })
  year: number;

  @Column({ length: 50 })
  fuel: string;

  @Column({ type: "decimal", precision: 15, scale: 2, default: 0 })
  km: number;

  @Column({ length: 50 })
  fipePrice: string;

  @Column({ type: "decimal", precision: 15, scale: 2, default: 0 })
  price: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: true })
  isGoodToSale: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.announcement)
  user: Users;

  @OneToMany(() => Comments, (comment) => comment.announcement)
  comment: Comments[];

  @OneToMany(() => Images, (image) => image.announcement)
  image: Images[];
}
