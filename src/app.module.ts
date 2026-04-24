import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './transactions/transactions.module';
// import { AuditModule } from './audit/audit.module'; // 👈 COMENTADO
import { Transaction } from './transactions/transaction.entity';
import { User } from './users/user.entity';
// import { Audit } from './audit/audit.entity'; // 👈 COMENTADO

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User, Transaction], // 👈 REMOVIDO AUDIT DAQUI
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    TransactionsModule,
    // AuditModule, // 👈 COMENTADO
  ],
})
export class AppModule {}