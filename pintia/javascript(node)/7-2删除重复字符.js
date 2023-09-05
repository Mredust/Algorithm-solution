const r = require("readline");

const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    const uniqueChars = [...new Set(input)];
    const sortedStr = uniqueChars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');

    console.log(`${sortedStr}`);

    rl.close();
});

