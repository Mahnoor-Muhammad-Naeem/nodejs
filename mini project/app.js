// FOR RUN THIS FILE: FIRSTLY, ON TERMINAL: cd mini project
// for run app.js file on terminal: node .\app.js
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  const choice = String(option || "").trim();  // use this

  if (choice === "1") {                        // compare choice
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if (choice === "2") {
    console.log("\n Your Todo Lists");
    todos.forEach((task, index) => {           // take (task, index)
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (choice === "3") {
    console.log("Good Byee");
    rl.close();
  } else {
    console.log("Invalid Option. Please try again");
    showMenu();
  }
};

showMenu();
