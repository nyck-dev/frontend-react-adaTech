const inquirer = require("@inquirer/prompts");


// const numAleatorio = parseInt(Math.random() * 10);

// console.log(numAleatorio);

async function main() {
    const numero = await inquirer.input({ message: "Digite um número:" });
    console.log(`Você digitou: ${numero}`);
  }
  
  main();