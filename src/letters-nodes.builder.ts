import { LetterNode } from './letter-node';
import { letters } from './letters-constants';
import { initWordsList } from './words.initializer';

const findLetterByWordPrefix = (prefix: string, words: [string?]) =>
  words.some((word) => word.startsWith(prefix));

const buildLetterNode = (words: [string?], index: number, letter: string , prefix: string): LetterNode => {
  const node = new LetterNode(index, letter);

  letters.forEach((nextLetter) => {
    const newPrefix =  `${prefix}${nextLetter}`;
    const isValidLetter = findLetterByWordPrefix(newPrefix, words);

    if (isValidLetter === true) {
      const nextNode = buildLetterNode(words, index + 1, nextLetter, newPrefix);
      node.nextLetters.push(nextNode);
    }
  });

  return node;
}

const buildLettersNodes = async () : Promise<[LetterNode?]>  => {
  const words = await initWordsList();

  const lettersNodes: [LetterNode?] = [];
  letters.forEach((letter) => {
    lettersNodes.push(buildLetterNode(words, 1, letter, letter));
  });

  return Promise.resolve(lettersNodes);
}

export { buildLettersNodes };