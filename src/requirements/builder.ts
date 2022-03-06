import { IPositionRequirement, PositionRequirement } from "./Position";
import { IWordRequirements, WordRequirements } from "./Requirement";

export const buildRequirements = (): IWordRequirements => {
  const positionRequirements: IPositionRequirement[] = [];

  positionRequirements.push(new PositionRequirement('V', []));
  positionRequirements.push(new PositionRequirement(null, []));
  positionRequirements.push(new PositionRequirement(null, []));
  positionRequirements.push(new PositionRequirement(null, []));
  positionRequirements.push(new PositionRequirement(null, []));

  const lettersThatMustBePresent = ['E', 'Y'];
  const lettersToIgnore = [];

  const wordRequirements = new WordRequirements(
    lettersThatMustBePresent,
    lettersToIgnore,
    positionRequirements
  );

  return wordRequirements;
}
