import { IWordRequirements } from '@/types';
import { LetterNode } from '../nodes/Letter';

const findMatches = (
  matches: [string?],
  requirements: IWordRequirements,
  node: LetterNode,
  matchLength: number,
  sequence: string,
) => {
  if (matchLength === 5) {
    if (requirements.validate(sequence)) {
      matches.push(sequence);
      return;
    }
  }
  
  const conditionForPosition = requirements.getConditionForPosition(matchLength - 1);
  if (conditionForPosition.validate(node.letter) === false) {
    return null;
  }

  // There might be valid matches up ahead, it should keep looking.
  node.nextLetters.forEach((nextLetterNode) => {
    const nextSequence = `${sequence}${nextLetterNode.letter}`;
    findMatches(matches, requirements, nextLetterNode, matchLength + 1, nextSequence);
  });
};

export { findMatches };