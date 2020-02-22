import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  @Column({ type: 'text' })
  body!: string

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date
}
