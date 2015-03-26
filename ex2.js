var input = process.argv;
var output = 0;
for (var i = 2; i < input.length; i++) {
    //console.log(input[i]);
    output += Number(input[i]);
};
console.log(output);
