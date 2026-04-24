import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity'; 

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount!: number; // Valor em Reais (R$)

  @Column()
  type!: string; // 'entrada' ou 'saida'

  // --- NOVOS CAMPOS: SIMULAÇÃO DE OPEN FINANCE ---
  @Column()
  institution_category!: string; // Ex: 'banco_tradicional', 'carteira_digital', 'plataforma_trabalho'

  @Column()
  institution_name!: string; // Ex: 'Itaú', 'Mercado Pago', 'Uber'

  @Column()
  description!: string; // Ex: 'Corrida finalizada'

  // --- RELACIONAMENTO COM O USUÁRIO ---
  @Column()
  userId!: string; // FK do usuário dono da transação

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user!: User;
}