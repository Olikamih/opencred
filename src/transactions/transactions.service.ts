import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity'; 
import { User } from '../users/user.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const { userId } = createTransactionDto;
    const user = await this.userRepository.findOne({ where: { id: userId as any } });
    if (!user) throw new NotFoundException('Usuário não encontrado!');

    const newRecord = this.transactionRepository.create({
      ...createTransactionDto,
      user: user,
    });

    return this.transactionRepository.save(newRecord);
  }

  // 🚀 NOVO ENDPOINT: O Cérebro do OpenCred
  async getScore(userId: string) {
    const transactions = await this.transactionRepository.find({
      where: { userId: userId as any }
    });

    let score = 450; // Pontuação inicial justa para autônomos

    transactions.forEach(t => {
      const val = Number(t.amount);
      if (t.type === 'entrada') {
        score += (val * 0.1); // 10% do valor vira score
      } else {
        score -= (val * 0.05); // saídas pesam menos que entradas
      }
    });

    // Travas de segurança do Score
    if (score > 1000) score = 1000;
    if (score < 0) score = 0;

    return {
      userId,
      score: Math.round(score),
      category: score > 800 ? 'Excelente' : score > 600 ? 'Bom' : 'Em Análise',
      timestamp: new Date().toISOString()
    };
  }

  async findAll() {
    return this.transactionRepository.find({ relations: ['user'] });
  }
}