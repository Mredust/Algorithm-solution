const r = require("readline");
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入第一个数字序列：', (n1) => {
    rl.question('请输入第二个数字序列：', (n2) => {
        let res1 = '';

        // 遍历第一个数字序列
        for (let i = 1; i < n1.length; i++) {
            // 如果当前数字和前一个数字���奇偶性相同
            if (n1[i] % 2 == n1[i - 1] % 2) {
                // 将较大的数字追加到结果中
                res1 += Math.max(n1[i], n1[i - 1]);
            }
        }

        let res2 = '';

        // 遍历第二个数字序列
        for (let i = 1; i < n2.length; i++) {
            // 如果当前数字和前一个数字的奇偶性相同
            if (n2[i] % 2 == n2[i - 1] % 2) {
                // 将较大的数字追加到结果中
                res2 += Math.max(n2[i], n2[i - 1]);
            }
        }

        if (res1 === res2) {
            console.log('结果相同：', res1);
        } else {
            console.log('第一个序列结果：', res1);
            console.log('第二个序列结果：', res2);
        }
        rl.close();
    });
});
