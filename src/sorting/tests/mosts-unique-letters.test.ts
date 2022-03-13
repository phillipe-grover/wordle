import {
  countNumberOfUniqueLetters,
  sortByMostUniqueLetters,
} from '../most-unique-letters';

describe('countNumberOfUniqueLetters', () => {
  test('returns 6 for monkey', () => {
    const monkey = countNumberOfUniqueLetters('monkey');
    expect(monkey).toEqual(6);
  });

  test('returns 0 for empty string', () => {
    const monkey = countNumberOfUniqueLetters('');
    expect(monkey).toEqual(0);
  });

  test('returns 0 for null', () => {
    const monkey = countNumberOfUniqueLetters(null);
    expect(monkey).toEqual(0);
  });

  test('returns 0 for undefined', () => {
    const monkey = countNumberOfUniqueLetters(undefined);
    expect(monkey).toEqual(0);
  });
});

describe('sortByMostUniqueLetters', () => {
  test('returns 1 when b has more unique words', () => {
    const a = 'panda';
    const b = 'audio';

    const result = sortByMostUniqueLetters(a, b);
    expect(result).toEqual(1);
  });

  test('returns -1 when a has more unique words', () => {
    const a = 'audio';
    const b = 'panda';

    const result = sortByMostUniqueLetters(a, b);
    expect(result).toEqual(-1);
  });

  test('returns zero when both words have the same number of unique letters', () => {
    const a = 'space';
    const b = 'audio';

    const result = sortByMostUniqueLetters(a, b);
    expect(result).toEqual(0);
  });
});
