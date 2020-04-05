var fs = require('fs')

const version = require('../package.json').version;
const electronPackage = './package.json';

fs.readFile(electronPackage, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/\"version\":\s*\"(.+?)\"/g, `"version": "${version}"`);

  fs.writeFile(electronPackage, result, 'utf8', function (err) {
     if (err) {
       return console.log(err);
     }
  });
});
