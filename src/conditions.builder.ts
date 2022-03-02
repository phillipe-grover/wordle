interface ICondition {
  match: string;
  misses: string[];
  foundMatch: () => boolean;
}

class Condition {
  match: string = null;
  misses: string[] = [];

  constructor(match: string, wrongLetters: string[]) {
    this.match = match,
    this.misses = wrongLetters;
  }

  public foundMatch = () => this.match != null;
}

const buildConditions = (): [ICondition?] => {
  const conditions: [ICondition?] = [];

  conditions.push(new Condition('C', []));
  conditions.push(new Condition(null, ['A', 'B', 'U', 'T', 'L', 'S', 'R', 'W', 'D']));
  conditions.push(new Condition('O', ['']));
  conditions.push(new Condition(null, ['A', 'B', 'U', 'T', 'L', 'S', 'R', 'W', 'D']));
  conditions.push(new Condition('E', []));

  return conditions;
}

export { ICondition, Condition, buildConditions };