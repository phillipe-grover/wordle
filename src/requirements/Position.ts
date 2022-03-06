export interface IPositionRequirement {
  exactMatch: string;
  lettersToIgnore: string[];
  
  expectsExactMatch: () => boolean;
  validate: (letter: string) => boolean;
}

export class PositionRequirement implements IPositionRequirement {
  exactMatch: string = null;
  lettersToIgnore: string[] = [];

  constructor(exactMatch: string, wrongLetters: string[]) {
    this.exactMatch = exactMatch,
    this.lettersToIgnore = wrongLetters;
  }

  public expectsExactMatch = () => this.exactMatch != null;
  
  public validate = (letter: string) => {
    if (this.expectsExactMatch()) {
      return this.exactMatch === letter;
    }

    return this.lettersToIgnore.includes(letter)  === false;
  }
}