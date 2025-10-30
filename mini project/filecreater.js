// for terminal: firstly, create the file on vscode, go to the terminal:
// write command: ni filecreater.js, so fill has create. 

// PS C:\Users\FC\Downloads\node.js\mini project> node .\filecreater.js
// Enter the file name: thapafile_node.js
// Enter the content for the file: this is the file creation project in nodejs by thapa tech
// ✅ File "thapafile_node.js.txt" created successfully!

// for run command: write on terminal: node .\filecreater.js

// for code:
// 1: enter the file name
// 2: enter the content

import readline from "readline";
import fs from "node:fs";

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your filename: ", (filename) => {
    rl.question("Enter the content for your file: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.error("Error writing the file:", err.message);
        } else {
          console.log(`✅ File "${filename}.txt" created successfully!`);
        }
        rl.close();
      });
    });
  });
};

fileCreation(); // <-- YOU FORGOT THIS
