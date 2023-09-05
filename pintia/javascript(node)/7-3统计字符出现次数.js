const r = require("readline");

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提示用户输入字符串
rl.question('', (str) => {
    // 提示用户输入字符
    rl.question('', (char) => {
        // 调用 countChar 函数并输出结果
        console.log(`${countChar(str, char)}`);
        rl.close();
    });
});

// 定义 countChar 函数
function countChar(str, char) {
    let count = 0;
    // 遍历字符串，统计出现指定字符的次数
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }
    return count;
}
