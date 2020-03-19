import Crypto from 'crypto'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  Index,
  ManyToOne,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Notification, User } from '.'

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column({ default: false })
  public!: boolean

  @OneToMany(
    () => Notification,
    notification => notification.channel
  )
  notifications!: Notification[]

  @Index({ unique: true })
  @Column()
  secret!: string

  @ManyToMany(
    () => User,
    user => user.subscribedChannels
  )
  subscribedUsers!: User[]

  @ManyToOne(
    () => User,
    user => user.createdChannels,
    { eager: true, nullable: false }
  )
  createdBy!: User

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date

  @BeforeInsert()
  async setSecret() {
    const generateSecret = async (): Promise<string> => {
      const secret = Crypto.randomBytes(32).toString('hex')
      const count = await Channel.count({ secret })
      return count === 0 ? secret : await generateSecret()
    }

    this.secret = await generateSecret()
  }
}
