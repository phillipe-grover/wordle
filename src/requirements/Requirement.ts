import { IPositionRequirement } from './Position';

export interface IWordRequirements {
  lettersThatMustBePresent: string[];
  lettersToIgnore: string[];
  positionsRequirements: IPositionRequirement[];

  validate: (word: string) => boolean;
  getConditionForPosition: (index: number) => IPositionRequirement;
}

export class WordRequirements implements IWordRequirements {
  lettersThatMustBePresent: string[];

  lettersToIgnore: string[];

  positionsRequirements: IPositionRequirement[];

  constructor(
    lettersThatMustBePresent: string[],
    lettersToIgnore: string[],
    positionsRequirements: IPositionRequirement[],
  ) {
    this.lettersThatMustBePresent = lettersThatMustBePresent;
    this.lettersToIgnore = lettersToIgnore;
    this.positionsRequirements = positionsRequirements;
  }

  public validate = (word: string) => {
    if (word.length === 5) {
      // If the word is complete:
      // Check if the word really contains all the letters that should be there.
      for (let index = 0; index < this.lettersThatMustBePresent.length; index++) {
        const element = this.lettersThatMustBePresent[index];
        if (word.includes(element) === false) {
          return false;
        }        
      }
    }

    // Checking letters that should not be there.
    for (let index = 0; index < this.lettersToIgnore.length; index++) {
      const element = this.lettersToIgnore[index];
      if (word.includes(element)) {
        return false;
      }
    }

    // Checking individual position requirements
    for (let index = 0; index < word.length; index++) {
      const element = word[index];
      const condition = this.positionsRequirements[index];
      
      if (condition.validate(element) === false) {
        return false;
      }
    }

    return true;
  };

  public getConditionForPosition = (index: number): IPositionRequirement =>
    this.positionsRequirements[index];
}