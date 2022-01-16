import { User } from '@src/entities/User';

describe('Register user on mailing list use case', () => {
  it('should be able to add user with complete data to mailing list', async () => {
    // const usersRepository: UserRepository = new UsersRepositoryInMemory();
    // const registerUserOnMailingList = new RegisterUserOnMailingList(
    //   usersRepository,
    // );

    const user: User = {
      name: 'John Doe',
      email: 'example@gmail.com',
    };

    // await registerUserOnMailingList.execute(user);
    // const createdUser = await usersRepository.findByEmail(user.email);

    // expect(createdUser).toBeDefined();
    // expect(createdUser.name).toBe(user.name);
    // expect(createdUser.email).toBe(user.email);
  });
});
