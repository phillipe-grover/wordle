import { countNumberOfUniqueLetters } from '../most-unique-letters';

describe('countNumberOfUniqueLetters', () => {
  test('returns 6 for monkey', () => {
    const monkey = countNumberOfUniqueLetters('monkey');
    expect(monkey).toEqual(6);
  });
});
