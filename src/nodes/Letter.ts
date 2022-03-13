interface ILetterNode {
  index: number,
  letter: string,
  nextLetters: [LetterNode?],
}

class LetterNode implements ILetterNode {
  index: number = null;

  letter: string = null;

  nextLetters: [LetterNode?];

  constructor(index: number, letter: string) {
    this.index = index;
    this.letter = letter;
    this.nextLetters = [];
  }
}

export { ILetterNode, LetterNode };