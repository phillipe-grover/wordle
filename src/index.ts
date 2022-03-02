import { buildLettersNodes } from './letters-nodes.builder';
import { buildConditions } from './conditions.builder'
import { findMatches } from './matches.finder';
import { sortMatches } from './matches.sorter';

const main = async () => {
  // 1 - Init the words in a tree
  const letterNodes = await buildLettersNodes();

  // 2 - Build conditions
  const conditions = buildConditions();

  // 3 - Finding the words that satisfy the list of conditions
  const matches: [string?] = [];
  letterNodes.forEach((letterNode) => {
    findMatches(matches, conditions, letterNode, 1, letterNode.letter);
  });

  // Order the matches by number of different words
  const sordedMatches = sortMatches(matches);

  // Presenting the result.
  console.log(sordedMatches);
};

main();





