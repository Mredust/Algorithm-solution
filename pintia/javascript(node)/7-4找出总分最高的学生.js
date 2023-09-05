const readline = require("readline");

// 创建接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示输入学生人数
rl.question('', (n) => {
  recursionInput(parseInt(n));
});

// 递归读取学生信息
function recursionInput(n) {
  let maxName = '';
  let maxId = '';
  let maxScore = 0;
    
  // 获取输入信息
  const getInput = (count) => {
    // 当读取到 n 个学生时，输出最高总分学生信息并关闭接口
    if (count === n) {
      console.log(`${maxName} ${maxId} ${maxScore}`);
      rl.close();
      return;
    }
    
    // 依次读取学生信息
    rl.question('', (input) => {
        const [id, name, s1, s2, s3] = input.split(" ");
        const totalScore = parseInt(s1) + parseInt(s2) + parseInt(s3);
        
        // 更新最高总分学生信息
        if (totalScore > maxScore) {
          maxScore = totalScore;
          maxName = name;
          maxId = id;
        }

      // 继续读取下一个学生信息
      getInput(count + 1);
    });
  };

  // 开始读取第一个学生信息
  getInput(0);
}

