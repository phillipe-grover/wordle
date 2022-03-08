import { buildLettersNodes } from './nodes/builder';
import { buildRequirements } from './requirements/builder';
import { findMatches } from './matcher';
import { sort } from './sorting';

const main = async () => {
  // 1 - Init the words in a tree
  const letterNodes = await buildLettersNodes();

  // 2 - Build requirements
  const requirements = buildRequirements();

  // 3 - Finding the words that satisfy the list of conditions
  const matches: [string?] = [];
  letterNodes.forEach((letterNode) => {
    findMatches(matches, requirements, letterNode, 1, letterNode.letter);
  });

  // Order the matches by number of different words
  const sordedMatches = sort(matches);

  // Presenting the result.
  console.log(sordedMatches);
};

main();





