import { MailAccountRepositoryInMemory } from '@src/useCases/repositories/MailAccountRepositoryInMemory';

describe('MailAccountRepositoryInMemory', () => {
  it('should return null if mailAccount is not found when find by email', async () => {
    const email = 'mock.example@gmail.com';

    const mailAccountRepositoryInMemory = new MailAccountRepositoryInMemory();
    const mailAccount = await mailAccountRepositoryInMemory.findByEmail(email);

    expect(mailAccount).toBe(null);
  });
});
