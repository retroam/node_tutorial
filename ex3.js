input_file = process.argv[2];
var fs = require('fs');
var file_buffer = fs.readFileSync(input_file);
var data = file_buffer.toString();
var data_split = data.split('\n');
console.log(data_split.length - 1);
