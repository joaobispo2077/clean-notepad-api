import { Email } from '@src/entities/Email';

describe('Email entity', () => {
  it('should be able to return true when receive a valid email', () => {
    const email = 'example@gmail.com';
    expect(Email.validate(email)).toBe(true);
  });

  it('should be not accept null strings', () => {
    const email = 'null';
    expect(Email.validate(email)).toBe(false);
  });

  it('should be not accept empty strings', () => {
    const email = '';
    expect(Email.validate(email)).toBe(false);
  });
});
