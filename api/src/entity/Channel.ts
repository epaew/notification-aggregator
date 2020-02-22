import Crypto from 'crypto'
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  getManager,
  Index,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Channel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Index({ unique: true })
  @Column()
  secret!: string

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
