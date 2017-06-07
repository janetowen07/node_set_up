const fs = require('fs');
const exec = require('child_process').exec;

// run npm mocha, chai, eslint, husky
// update packageJSON test scripts

fs.writeFile('index.js', 'module.exports =', (err) => {
  if (err) throw err;
  console.log('The index file has been saved!');
});

fs.writeFile('README.md', '', (err) => {
  if (err) throw err;
  console.log('The README file has been saved!');
});

fs.readFile('./.gitignore_template', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.writeFile('.gitignore', data, (err) => {
    if (err) throw err;
    console.log('The .gitignore file has been saved!');
  });
});

fs.mkdir('./spec', (err) => {
  if (err) throw err;
  console.log('spec folder made');
  fs.readFile('./testing.js', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.writeFile('spec/spec.js', data, (err) => {
      if (err) throw err;
      console.log('The spec.js file has been saved');
    });
  });
});

exec('npm init -y && npm install --save-dev mocha eslint chai husky', (err, stdout) => {
  if (err) throw err;
  console.log(stdout);
});
