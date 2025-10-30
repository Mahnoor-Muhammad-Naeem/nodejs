// const url = 'https://official-joke-api.appspot.com/random_jokes;

// import https from 'https';
// import chalk from 'chalk';

// const getJoke = () => {
//     const url = 'https://official-joke-api.appspot.com/random_joke';

//     https.get(url, (response) => {
//         response.on('data', (chunk) => {
//         });

//         response.on('end', () => {
//             const joke = JSON.parse(data);
//             console.log(joke)
//             console.log(`Here is a random joke:`);
//             console.log(`chalk.red(${joke.setup})`);
//             console.log(`chalk.blue.bgRed.bold(${joke.punchline})`);
//         })
//     })
// }




// for updated: => correct

// joke_generator.js  (ESM)
// npm init -y && npm i chalk && npm pkg set type=module
// node .\joke_generator.js

// import https from "https";
// import chalk from "chalk";

// const getJoke = () => {
//   const url = "https://official-joke-api.appspot.com/random_joke";

//   https.get(url, (response) => {
//     let data = "";

//     // collect chunks
//     response.on("data", (chunk) => {
//       data += chunk;
//     });

//     // when complete, parse & print
//     response.on("end", () => {
//       try {
//         const joke = JSON.parse(data);
//         console.log("Here is a random joke:");
//         console.log(chalk.red(joke.setup));
//         console.log(chalk.blue.bgRed.bold(joke.punchline));
//       } catch (e) {
//         console.error("JSON parse error:", e.message);
//       }
//     });
//   }).on("error", (err) => {
//     console.error("Request error:", err.message);
//   });
// };

// getJoke();




// FOR 3RD TIME UPDATED: *********** important
// joke_generator.js (ESM)

// for run code: write commands on terminal: 
// npm init -y => mandatory
// npm pkg set type=module
// npm i chalk => mandatory

// for run file, which is joke_generator.js, write command on terminal.
// node ".\joke_generator.js"    // 

import https from "node:https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const joke = JSON.parse(data);
        console.log("Here is a random joke:");
        console.log(chalk.red(joke.setup));
        console.log(chalk.blue.bgRed.bold(joke.punchline));
      } catch (e) {
        console.error("JSON parse error:", e.message);
      }
    });
  }).on("error", (err) => {
    console.error("Request error:", err.message);
  });
};

getJoke();


// for fouth:
// import https from 'node:https';
// import chalk from 'chalk';

// const getJoke = () => {
//     const url = 'https://official-joke-api.appspot.com/random_joke';

//     https.get(url, (repsonse) => {
//         let data = "";
//         response.on('data', (chunk) => {
//             data += chunk;
//         });

//         Response.on('end', () => {
//             const joke = JSON.parse(data);
//             console.log(joke)
//             console.log(`Here is a random joke:`);
//             console.log('chalk.red(${joke.setup})');
//             console.log(`chalk.blue.bgRed.bold(${joke.punchline})`);

//         })
//     })
// }



// for correct whole code from resource:
// joke_generator.js  (CommonJS)

// import https from 'https';
// import chalk from 'chalk';

// const getJoke = () => {
//   const url = "https://official-joke-api.appspot.com/random_joke";

//   https.get(url, (response) => {
//     let data = "";

//     // collect chunks
//     response.on("data", (chunk) => {
//       data += chunk
//     });

//     // when complete, parse & print
//     response.on("end", () => {
//         const joke = JSON.parse(data);
//         // console.log(joke)
//         console.log('Here is a random ${joke.type} joke:');
//         console.log(chalk.red('${joke.setup}'));
//         console.log(chalk.blue.bgRed.bold('${joke.punchline}'));

//     });

//     // handle response stream errors
//     response.on("error", (err) => {
//       console.log(`Error fetching the joke (response): ${err.message}`);
//     })
//   });
// };

// getJoke();
