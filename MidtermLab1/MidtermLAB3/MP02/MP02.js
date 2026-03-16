const fs = require('fs');
const readline = require('readline');

const file = 'Sample_Data-Prog-2-csv.csv'; // Make sure this file is in the same folder

let count = 0;

// Create a read stream
const rl = readline.createInterface({
input: fs.createReadStream(file),
crlfDelay: Infinity
});

// Read the file line by line
rl.on('line', (line) => {
if (count < 10) {
    console.log(line);
    count++;
} else {
    rl.close(); // Stop reading after 10 lines
}
});

rl.on('close', () => {
console.log('Finished reading first 10 lines.');
});

rl.on('error', (err) => {
console.error('Error reading file:', err.message);
});