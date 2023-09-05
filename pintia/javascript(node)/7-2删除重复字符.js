const r = require("readline");

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提示用户输入
rl.question('',(input)=>{
    
    // 获取字符串中唯一字符
    const uniqueChars = [...new Set(input)];
    
    // 对字符进行排序并连接成字符串
    const sortedStr = uniqueChars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');

    // 输出结果
    console.log(`${sortedStr}`);

    // 关闭 readline 接口
    rl.close();
});
