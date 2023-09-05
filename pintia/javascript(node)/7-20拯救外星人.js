const r = require("readline");
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提示用户输入
rl.question('请输入两个数字，用空格分隔：', (input) => {
    // 将用户输入的字符串分割成两个数字，并转换为数字类型
    const [a, b] = input.split(" ").map(Number);
    
    // 调用递归函数计算 a + b 的阶乘，并打印结果
    console.log(`a + b 的阶乘结果为: ${recursion(a + b)}`);

    // 关闭输入流
    rl.close();
});

// 递归计算阶乘的函数
function recursion(n) {
    if (n === 1) {
        return 1;
    }
    return n * recursion(n - 1);
}
