import { PositionRequirement } from '../Position';

describe('PositionRequirement', () => {
  describe('constructor', () => {
    test('throws an exception when initialized with match of length zero', ()  => {
      const fn = () => new PositionRequirement('', null);
      expect(fn).toThrow('The value of the exactMatch fields must be a single character');
    });

    test('throws an exception when initialized with match of length 2', () => {
      const fn = () => new PositionRequirement('AB', null);
      expect(fn).toThrow('The value of the exactMatch fields must be a single character');
    });

    test('does not throw an exception when match length is 1', () => {
      const fn = () => new PositionRequirement('A', null);
      expect(fn).not.toThrow();
    });

    test('does not throw an exception when match is null', () => {
      const fn = () => new PositionRequirement(null, null);
      expect(fn).not.toThrow();
    });

    test('does not throw an exception when match is undefined', () => {
      const fn = () => new PositionRequirement(undefined, null);
      expect(fn).not.toThrow();
    });

    test('throws an exception when lettersToIgnore has an item with length 2', () => {
      const fn = () => new PositionRequirement('A', ['B', 'BC']);
      expect(fn).toThrow('The elements of lettersToIgnore must be single letters');
    });

    test('does not throw an exception when lettersToIgnore is undefined', () => {
      const fn = () => new PositionRequirement('A', undefined);
      expect(fn).not.toThrow();
    });

    test('does not throw an exception when lettersToIgnore only has single letter elements', () => {
      const fn = () => new PositionRequirement('A', ['C', 'D']);
      expect(fn).not.toThrow();
    });
  });

  describe('expectsExactMatch', () => {
    test('returns true when exactMatch has value', () => {
      const positionRequirement = new PositionRequirement('A', null);

      const result = positionRequirement.expectsExactMatch();
      expect(result).toEqual(true);
    });

    test('returns false when exactMatch is null', () => {
      const positionRequirement = new PositionRequirement(null, null);

      const result = positionRequirement.expectsExactMatch();
      expect(result).toEqual(false);
    });
  });

  describe('validate', () => {
    describe('Exact match', () => {
      test('returns true for exact match for BOTH UPPER CASE', () => {
        const positionRequirement = new PositionRequirement('A', null);
  
        const result = positionRequirement.validate('A');
        expect(result).toEqual(true);
      });

      test('returns true for exact match UPPER CASE and match LOWER CASE', () => {
        const positionRequirement = new PositionRequirement('a', null);
  
        const result = positionRequirement.validate('A');
        expect(result).toEqual(true);
      });

      test('returns true for exact match LOWER CASE', () => {
        const positionRequirement = new PositionRequirement('A', null);
  
        const result = positionRequirement.validate('a');
        expect(result).toEqual(true);
      });

      test('returns true for exact match for BOTH LOWER CASE', () => {
        const positionRequirement = new PositionRequirement('a', null);
  
        const result = positionRequirement.validate('a');
        expect(result).toEqual(true);
      });
  
      test('returns false for exact match', () => {
        const positionRequirement = new PositionRequirement('A', null);
  
        const result = positionRequirement.validate('B');
        expect(result).toEqual(false);
      });

      test('returns true for exact match for equivalent symbols', () => {
        const positionRequirement = new PositionRequirement('A', null);
  
        const result = positionRequirement.validate('Ã');
        expect(result).toEqual(true);
      });
    });

    describe('Parameter validations', () => {
      test('throws when letter is null', () => {
        const positionRequirement = new PositionRequirement('A', null);
        const fn = () => positionRequirement.validate(null);
  
        expect(fn).toThrow('The field letter is mandatory and must be a valid single character');
      });
  
      test('throws when letter is empty', () => {
        const positionRequirement = new PositionRequirement('A', null);
        const fn = () => positionRequirement.validate('');
  
        expect(fn).toThrow('The field letter is mandatory and must be a valid single character');
      });
  
      test('throws when letter is undefined', () => {
        const positionRequirement = new PositionRequirement('A', null);
        const fn = () => positionRequirement.validate(undefined);
  
        expect(fn).toThrow('The field letter is mandatory and must be a valid single character');
      });
    });
  });

  describe('Using lettersToIgnore list', () => {
    test('returns true when letter is NOT in the list of ignored letters', () => {
      const positionRequirement = new PositionRequirement(null, ['A', 'B']);

      const result = positionRequirement.validate('C');
      expect(result).toEqual(true);
    });

    test('returns false when letter is IN the list of ignored letters', () => {
      const positionRequirement = new PositionRequirement(null, ['A', 'B']);

      const result = positionRequirement.validate('A');
      expect(result).toEqual(false);
    });

    test('returns false when LOWER CASE letter is IN the list of ignored letters', () => {
      const positionRequirement = new PositionRequirement(null, ['A', 'B']);

      const result = positionRequirement.validate('a');
      expect(result).toEqual(false);
    });

    test('returns false when UPPER CASE letter is IN the list of lower case ignored letters', () => {
      const positionRequirement = new PositionRequirement(null, ['a', 'b']);

      const result = positionRequirement.validate('A');
      expect(result).toEqual(false);
    });

    test('returns false when equivalent symbol letter is IN the list of ignored letters', () => {
      const positionRequirement = new PositionRequirement(null, ['A', 'B']);

      const result = positionRequirement.validate('Ã');
      expect(result).toEqual(false);
    });

    test('returns false when letter is IN the list of ignored equivalent symbol letters', () => {
      const positionRequirement = new PositionRequirement(null, ['Ã', 'B']);

      const result = positionRequirement.validate('A');
      expect(result).toEqual(false);
    });
  });
});