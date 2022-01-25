import { MailAccountRepositoryInMemory } from '@src/useCases/repositories/MailAccountRepositoryInMemory';

describe('MailAccountRepositoryInMemory', () => {
  it('should return null if mailAccount is not found when find by email', async () => {
    const email = 'mock.example@gmail.com';

    const mailAccountRepositoryInMemory = new MailAccountRepositoryInMemory();
    const mailAccount = await mailAccountRepositoryInMemory.findByEmail(email);

    expect(mailAccount).toBe(null);
  });

  it('should be able to return a list of mailAccount from repository', async () => {
    const mailAccountRepositoryInMemory = new MailAccountRepositoryInMemory();

    const firstUser = {
      email: 'first@email.com',
      name: 'First Name',
    };

    const secondUser = {
      email: 'second@email.com',
      name: 'Second Name',
    };

    await mailAccountRepositoryInMemory.create(firstUser);

    await mailAccountRepositoryInMemory.create(secondUser);

    const mailAccounts = await mailAccountRepositoryInMemory.findAll();

    expect(mailAccounts.length).toBe(2);
    expect(mailAccounts).toEqual([firstUser, secondUser]);
  });
});
