const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function tryOpen(filename) {
    fs.access(filename, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(filename, 'You are awesome', (err2) => {
                readline.close();
                if (err2) throw err2;
            });
        } else {
            readline.question('Please provide a filename: ', tryOpen);
        }
    });
}

tryOpen('new file.txt');