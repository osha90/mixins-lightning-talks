/**
 * Idea is to seperate functionality and composition.
 * Its dont with the help of stamp specification
 * Go here to learn more https://github.com/stampit-org/stamp-specification/
 * A Stamp is a factory function that returns an object.
 * Compose if a function that returns a Stamp
 */
const stampit = require('stampit');
const path = require('path');
const fs = require('fs');

const readFileMethods = stampit.methods({
  getFilePath(filePath) {
    return this.path.posix.join(__dirname, filePath);
  },
  readFile() {
    return this.fs.readFileSync(this.getFilePath(), 'utf-8');
  }
});

const readFileWithSecurity = stampit.methods({
  readFile(filePath) {
    if (this.fs.existsSync(this.getFilePath(filePath)))
      return this.fs.readFileSync(this.getFilePath(filePath), 'utf-8');
    else throw new Error('pass in a new file')
  }
});

const readFileStamp = readFileMethods.compose(readFileWithSecurity).props({
  fs,
  path
});

console.log(readFileStamp().readFile('../index.js'));
console.log(readFileStamp().readFile('../index12.js'));
