var folder_path = process.argv[2];
var filter = process.argv[3];
var fs = require('fs');
var path = require('path');
fs.readdir(folder_path, function(err, list){
    for(var i = 0; i < list.length; i++){
       if (path.extname(list[i]) == '.' + filter){
          console.log(list[i]);
       }
    }  
});
