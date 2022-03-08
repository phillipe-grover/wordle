const fs = require('fs');
const readline = require('readline');
const path = require('path');

const initWordsList = async (): Promise<[string?]> => {
  const fileStream = fs.createReadStream(path.resolve(__dirname, '../../static/words.txt'));

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