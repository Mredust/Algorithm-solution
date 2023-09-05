const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入
rl.question('', (input) => {
  // 解析输入，获取 m 和 n 的值
  const [m, n] = input.split(' ').map(Number);
  const perfectNums = [];

  // 遍历从 m 到 n 的数字
  for (let i = m; i <= n; i++) {
    let factorsSum = 0;
    // 找到 i 的因数并计算它们的和
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        factorsSum += j;
      }
    }
    // 如果因数之和等于 i，则它是一个完美数
    if (factorsSum === i) {
      perfectNums.push(i);
    }
  }

  // 输出结果
  if (perfectNums.length === 0) {
    console.log('None');
  } else {
    for (const num of perfectNums) {
      const factors = [];
      // 找到完美数的因数
      for (let j = 1; j < num; j++) {
        if (num % j === 0) {
          factors.push(j);
        }
      }
      // 输出完美数及其因数
      console.log(`${num} = ${factors.join(' + ')}`);
    }
  }

  // 关闭 readline 接口
  rl.close();
});

