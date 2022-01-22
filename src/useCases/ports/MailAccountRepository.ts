import { MailAccount } from '@src/entities/MailAccount';

export interface MailAccountRepository {
  create(user: MailAccount): Promise<void>;
  findByEmail(email: string): Promise<MailAccount | null>;
  findAll(): Promise<MailAccount[]>;
}
