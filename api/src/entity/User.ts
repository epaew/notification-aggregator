import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Channel } from '.'

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  id!: string

  @Column()
  displayName!: string

  @Column({ nullable: true })
  photoURL!: string

  @OneToMany(() => Channel, channel => channel.createdBy)
  createdChannels!: Channel[]

  @ManyToMany(() => Channel, channel => channel.subscribedUsers)
  @JoinTable()
  subscribedChannels!: Channel[]

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date
}
