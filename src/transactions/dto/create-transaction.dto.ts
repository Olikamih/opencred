export class CreateTransactionDto {
  amount!: number;
  type!: string; // 'entrada' ou 'saida'
  institution_category!: string; // Ex: 'bank_data', 'wallet', 'work_platform'
  institution_name!: string; 
  description!: string; 
  userId!: string; 
}