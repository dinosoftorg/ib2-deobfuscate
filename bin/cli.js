#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const ib2 = require('../src');
const argv = yargs(hideBin(process.argv)).argv;

let source = argv._[0];
const destination = argv._[1];

let deobfuscated;
fs.readFile(source, "utf8", (err, data) => {
  if (err) {
    throw new Error("failed to read source file");
  }
  deobfuscated = ib2.deobfuscate(data)
})

fs.writeFile(destination, deobfuscated, (err) => {
  if (err) {
    throw new Error("failed to write destination file");
  }
});