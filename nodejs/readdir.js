const testFolder = './data';
const fs = require('fs');

// fs.readdir(testFolder, (error, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// })

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})