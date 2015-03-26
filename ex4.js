var input_file = process.argv[2];
var fs = require('fs');
fs.readFile(input_file,'utf8', function(err, data){
    console.log(data.split('\n').length - 1);
})

