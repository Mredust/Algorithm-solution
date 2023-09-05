// 导入 'readline' 模块
const r = require("readline");

// 创建 'readline' 接口
const rl = r.createInterface({
    input: process.stdin,  // 设置输入流为标准输入
    output: process.stdout  // 设置输出流为标准输出
});

// 提示用户输入
rl.question('', (input) => {
    // 将输入字符串按空格拆分为数组，并分别赋值给 n、x、m 和 k
    const [n, x, m, k] = input.split(" ");

    // 判断条件
    if (parseInt(k) === parseInt(n)) {
        console.log(`没有买${x}`);
    } else if (parseInt(k) === parseInt(m)) {
        console.log(`看到了买${x}`);
    } else {
        console.log(`忘了找买${x}`);
    }

    // 关闭 'readline' 接口
    rl.close();
});
