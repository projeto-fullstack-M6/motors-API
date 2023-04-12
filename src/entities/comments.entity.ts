import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "./users.entity";
import { Announcements } from "./announcement.entity";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.comment)
  user: Users;

  @ManyToOne(() => Announcements, (announcement) => announcement.comment)
  announcement: Announcements;
}
