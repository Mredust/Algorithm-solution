const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (line) => {
  // 按空格分割成单词数组，并倒序输出
  const words = line.trim().split(/\s+/).reverse();
  console.log(words.join(' '));
});
