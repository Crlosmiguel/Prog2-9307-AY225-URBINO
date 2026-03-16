const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Ask user for CSV file path via command line argument
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a CSV file path as a command line argument.");
  console.error("Example: node csvToJson.js sample.csv");
  process.exit(1);
}

const outputFile = 'output.json';

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.error("CSV file does not exist:", filePath);
  process.exit(1);
}

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  crlfDelay: Infinity
});

let headers = [];
const jsonData = [];
let isFirstLine = true;

rl.on('line', (line) => {
  // Skip empty lines
  if (!line.trim()) return;

  if (isFirstLine) {
    // First line = headers
    headers = line.split(',').map(h => h.trim());
    isFirstLine = false;
  } else {
    const values = line.split(',').map(v => v.trim());
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    jsonData.push(obj);
  }
});

rl.on('close', () => {
  // Write JSON array to file
  fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error("Error writing JSON file:", err.message);
      return;
    }
    console.log(`CSV successfully converted to JSON.`);
    console.log(`Output file: ${outputFile}`);
  });
});

rl.on('error', (err) => {
  console.error("Error reading file:", err.message);
});