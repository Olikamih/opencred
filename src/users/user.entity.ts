import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  full_name!: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column({ nullable: true })
  category!: string;

  @Column({ nullable: true })
  platform_origin!: string;

  @Column({ type: 'int', default: 300 })
  credit_score!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  current_limit!: number;
}