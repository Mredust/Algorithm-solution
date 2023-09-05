var fs = require('fs');
var buf = '';

process.stdin.on('readable',()=> {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end',()=> {
  buf.split('\n').forEach((line)=> {
    var numbers = line.split(' ').map((x) { return parseInt(x); });
    if (numbers.length != 4) return;
    var sum = numbers.reduce((a, b) { return a + b; });
    var average = sum / 4;
    console.log(`Average为(${numbers.join('+')})/4=${average.toFixed(2)}`);
  });
});
