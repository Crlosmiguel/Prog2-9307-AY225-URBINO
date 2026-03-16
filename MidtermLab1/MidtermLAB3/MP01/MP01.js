const fs = require('fs');

const filePath = 'data.csv'; // Replace with your CSV file path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split by line breaks and filter out empty lines
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');
    console.log("Total number of records:", lines.length);
});