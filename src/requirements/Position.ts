import { IPositionRequirement } from '@/types';

/* eslint-disable @typescript-eslint/no-unused-expressions */

const cleanNonAsciiSymbols = (letter: string) => {
  switch (letter) {
    case 'Ã': return 'A';
    case 'Á': return 'A';
    case 'À': return 'A';
    case 'Ä': return 'A';
    case 'É': return 'E';
    case 'È': return 'E';
    case 'Ó': return 'O';
    case 'Ò': return 'O';
    case 'Ò': return 'O';
    case 'Ö': return 'O';
    case 'Ç': return 'C';
    case 'Ü': return 'U';
    case 'Ú': return 'I';
    case 'Í': return 'A';
  
    default:
      return letter;
  }
};

export class PositionRequirement implements IPositionRequirement {
  private exactMatch: string = null;

  private lettersToIgnore: string[] = [];

  constructor(exactMatch: string, lettersToIgnore: string[]) {
    if (exactMatch !== null && exactMatch !== undefined) {
      if (exactMatch.length !== 1){
        // Validating field exactMatch.
        throw new Error('The value of the exactMatch fields must be a single character');
      }

      this.exactMatch = exactMatch.toUpperCase();
    }

    // Validating field lettersToIgnore.
    if (
      lettersToIgnore !== null &&
      lettersToIgnore !== undefined) {
      const hasError = lettersToIgnore.some((element ) => element.length !== 1);
      if (hasError) {
        throw new Error('The elements of lettersToIgnore must be single letters');
      }

      this.lettersToIgnore = lettersToIgnore.map((element) => cleanNonAsciiSymbols(element.toUpperCase()));
    }
  }

  public expectsExactMatch = () => this.exactMatch != null;
  
  public validate = (letter: string) => {
    if (letter === null || letter === undefined || letter.length !== 1) {
      throw new Error('The field letter is mandatory and must be a valid single character');
    }

    if (this.expectsExactMatch()) {
      return this.exactMatch === cleanNonAsciiSymbols(letter.toUpperCase());
    }

    return this.lettersToIgnore.includes(cleanNonAsciiSymbols(letter.toUpperCase())) === false;
  };
}