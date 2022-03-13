
export interface IPositionRequirement {
  expectsExactMatch: () => boolean;
  validate: (letter: string) => boolean;
}

export interface IWordRequirements {
  lettersThatMustBePresent: string[];
  lettersToIgnore: string[];
  positionsRequirements: IPositionRequirement[];

  validate: (word: string) => boolean;
  getConditionForPosition: (index: number) => IPositionRequirement;
}
