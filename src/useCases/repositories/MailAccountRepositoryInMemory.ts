import { MailAccountRepository } from '../ports/MailAccountRepository';

import { MailAccount } from '@src/entities/MailAccount';

export class MailAccountRepositoryInMemory implements MailAccountRepository {
  private users: MailAccount[] = [];

  async create(user: MailAccount): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<MailAccount | null> {
    const user = this.users.find((user) => user.email === email);

    return user || null;
  }

  async findAll(): Promise<MailAccount[]> {
    return this.users;
  }
}
