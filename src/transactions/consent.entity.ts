import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity'; 

@Entity('consents')
export class Consent {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  institution!: string; // Ex: 'Nubank', 'Uber', 'Itaú'

  @Column({ default: 'active' })
  status!: string; // 'active' (ativo) ou 'revoked' (revogado)

  @Column({ type: 'timestamp' })
  expires_at!: Date; // Data de validade da permissão

  // --- RELACIONAMENTO COM O UTILIZADOR ---
  @Column()
  userId!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user!: User;
}