var fs = require('fs');
var buf = '';
process.stdin.on('readable',()=>{
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end',()=>{
    buf.split('\n').forEach((line)=>{
        var n =parseInt(line);
        if(isNaN(n)){
            return ;
        }
        var sum =0;
        for (var i = 1; i < n; i++) {
            if (n % i == 0){
              sum += i;
            }
        }
        console.log(sum);
    });
});



