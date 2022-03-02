const countNumberOfUniqueLetters = (word: string) => {
  const dict = {};
  let counter = 0;

  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    
    if (dict[letter] === undefined) {
      counter += 1;
      dict[letter] = true;
    }
  }

  return counter;
};

const sortMatches = (matches: [string?]): [string?] => {
  return matches.sort((a, b) => {
    const countA = countNumberOfUniqueLetters(a);
    const countB = countNumberOfUniqueLetters(b);

    return countB - countA;
  })
};

export { sortMatches };