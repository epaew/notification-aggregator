import Crypto from 'crypto'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  getManager,
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

  @OneToMany(() => Notification, notification => notification.channel, {
    cascade: true
  })
  notifications!: Notification[]

  @Index({ unique: true })
  @Column()
  secret!: string

  @ManyToMany(() => User, user => user.subscribedChannels)
  subscribedUsers!: Notification[]

  @ManyToOne(() => User, user => user.createdChannels, { eager: true, nullable: false })
  createdBy!: User

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date

  @BeforeInsert()
  async setSecret () {
    const generateSecret = async (): Promise<string> => {
      const secret = Crypto.randomBytes(32).toString('hex')
      const { count } = await getManager()
        .createQueryBuilder(Channel, 'c')
        .select('COUNT(id)', 'count')
        .where('c.secret = :secret', { secret })
        .getRawOne()
      console.log(count)
      if (count === '0') {
        return secret
      } else {
        return generateSecret()
      }
    }

    this.secret = await generateSecret()
  }
}
