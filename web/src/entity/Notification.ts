import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Channel } from '.'

@Entity()
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  @Column({ type: 'text' })
  body!: string

  @ManyToOne(() => Channel, channel => channel.notifications, {
    eager: true,
    nullable: false,
  })
  channel!: Channel

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date
}
