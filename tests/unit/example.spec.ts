import { sum } from '../../src/example';

describe('example test', () => {
  it('should be 4 sum of 2 and 2', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
