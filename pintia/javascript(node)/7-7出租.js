const r = require('readline');

const rl = r.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 提示用户输入字符串
rl.question('', (str) => {

    //临时数组
    const strArr = [];
  
    // 将字符串中的每个字符转换为整数并存入数组
    for(let i = 0; i <str.length; i++){
        strArr.push(parseInt(str[i]));
    }
  
    // 去除重复的数字并按降序排序
    const arr =[...new Set(strArr)].sort((a,b) => (b - a));

    const index = [];
    // 遍历字符串和排序后的数组，记录字符在排序数组中的索引
    for(let i = 0; i <str.length; i++){
        for(let j = 0; j <arr.length; j++){
            if(str[i]==arr[j]){
                index.push(j);
            }
        }
    }

    // 关闭 readline 接口
    rl.close();
    
    // 输出整型数组 arr 和 index 的代码
    console.log(`int[] arr = new int[]{${arr.join(',')}};`);
    console.log(`int[] index = new int[]{${index.join(',')}};`);
});
