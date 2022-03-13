import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const initWordsList = async (): Promise<[string?]> => {
  const fileStream = fs.createReadStream(path.resolve(__dirname, '../../static/pt-br.txt'));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const words: [string?] = [];

  for await (const line of rl) {
    const upperLine = line.toUpperCase();
    words.push(upperLine);
  }

  return await Promise.resolve(words);
};

export { initWordsList };