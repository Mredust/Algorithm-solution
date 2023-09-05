// 导入 'readline' 模块
const r = require("readline");

// 创建 'readline' 接口
const rl = r.createInterface({
    input: process.stdin,  // 设置输入流为标准输入
    output: process.stdout  // 设置输出流为标准输出
});

// 提示用户输入
rl.question('', (input) => {
    isEnding(parseInt(input.trim()));  // 调用 isEnding 函数，并将用户输入的整数作为参数传递
});

// 定义 isEnding 函数，接收一个整数参数
function isEnding(num) {
    if (num === 0) {
        rl.close();  // 如果参数为0，关闭 'readline' 接口并返回
        return;
    }
    
    // 提示用户输入
    rl.question('', (input) => {
        const [a, b, c] = input.split(" ").map(Number);  // 将输入的字符串拆分为数字数组
        if ((a + b) === c) {
            console.log(`Tu Dou`); 
        } else if ((a * b) === c) {
            console.log(`Lv Yan`); 
        } else {
            console.log(`zhe du shi sha ya!`);
        }
        isEnding(num - 1);  // 递归调用 isEnding 函数，减少 num 的值
    });
}
