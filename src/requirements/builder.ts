import { IPositionRequirement, PositionRequirement } from './Position';
import { IWordRequirements, WordRequirements } from './Requirement';

export const buildRequirements = (): IWordRequirements => {
  const positionRequirements: IPositionRequirement[] = [];

  positionRequirements.push(new PositionRequirement(null, ['O', 'L', 'B', 'D', 'V']));
  positionRequirements.push(new PositionRequirement('U', []));
  positionRequirements.push(new PositionRequirement(null, ['T', 'A', 'G', 'N', 'C', 'L']));
  positionRequirements.push(new PositionRequirement(null, ['E', 'L', 'O', 'D', 'H', 'V']));
  positionRequirements.push(new PositionRequirement('A', []));

  const lettersThatMustBePresent = ['A', 'U'];
  const lettersToIgnore = ['R', 'T', 'S', 'E', 'O', 'P'];

  const wordRequirements = new WordRequirements(
    lettersThatMustBePresent,
    lettersToIgnore,
    positionRequirements,
  );

  return wordRequirements;
};
