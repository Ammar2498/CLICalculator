import inquirer from "inquirer";
import chalk from "chalk";
import { getAnswer } from "./calc.js";





async function main() {
  let ans = await inquirer.prompt([
    {
        
      message:"Enter Your First Number ",
      
      type: "number",
      name: "Num1",
    },
    {
      message: "Enter you Second Number",
      type: "number",
      name: "Num2",
    },

    {
      message: "Select your Operator ",
      type: "list",
      choices: ["+", "-", "*", "/"],
      name: "operator",
    },
  ]);

  let result = getAnswer(ans.Num1, ans.Num2, ans.operator);
  const formated = chalk.bold.green(`Result ${result}`)
  console.log(formated);
  

}
main();
