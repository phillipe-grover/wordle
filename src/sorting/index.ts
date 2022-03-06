import { sortByMostUniqueLetters } from "./by.most-unique-letters";

const sort = (matches: [string?]): [string?] => {
  return matches.sort(sortByMostUniqueLetters);
};

export { sort };