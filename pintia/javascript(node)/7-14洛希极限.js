const r = require("readline");
const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
  
    const [a,b,c] = input.split(' ').map(Number);
    let res1=0;
  
    //计算洛希极限
    if(b==0){
        res1=a*2.455;
    }else{
        res1=a*1.26;
    }
  
    //判断是否撕碎
    let res2 ="";
    if (res1 > c) {
        res2 += 'T_T';
    } else {
        res2 += '^_^';
    }

    //输出结果
    console.log(`${res1.toFixed(2)} ${res2}`);

    //关闭接口
    rl.close();
});
