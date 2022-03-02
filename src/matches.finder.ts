import { LetterNode } from './letter-node';
import { ICondition } from './conditions.builder'

const findMatches = (
  matches: [string?],
  conditions: [ICondition?],
  node: LetterNode,
  matchLength: number,
  sequence: string
) => {
  if (conditions.length == 0) {
    // Reached the leaf nodes.
    return null;
  }

  if (matchLength === 5) {
    // it is a 5 letter words, hence valid.
    matches.push(sequence);
    return;
  }
  
  const currentCondition = conditions[matchLength - 1];
  if (currentCondition.foundMatch()
    && currentCondition.match !== node.letter) {
    // The letter at this position is known and the current node is not it.
    return null;
  }

  if (currentCondition.misses.some((miss) => node.letter === miss)) {
    // The current letter is a miss.
    return null;
  }

  // There might be valid matches up ahead, it should keep looking.
  node.nextLetters.forEach((nextLetterNode) => {
    const nextSequence = `${sequence}${nextLetterNode.letter}`
    findMatches(matches, conditions, nextLetterNode, matchLength + 1, nextSequence)
  });
};

export { findMatches };