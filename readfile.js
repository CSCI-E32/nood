var fs = require('fs');

//var contents = fs.readFileSync("package.json").toString();
//console.log(contents);

var file = fs.createReadStream("package.json");
var newfile = fs.createWriteStream("newfile.json");
var chunks = 0;

/*
file.on("readable", function(){
  var chunk = null;
  while(null !== (chunk = file.read())){
    //console.log(chunk.toString());
    //chunks++;
    //console.log(chunks + " :: " + chunk.length);
    newfile.write(chunk);
  }
});
*/

file.pipe(newfile);
