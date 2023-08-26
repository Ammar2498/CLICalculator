import inquirer from "inquirer";
import { calculator } from "./calc.js";
async function main() {
    let ans = await inquirer.prompt([
        {
            message: "Enter Your First Number ",
            type: "number",
            name: "Num1"
        },
        {
            message: "Enter you Second Number",
            type: "number",
            name: "Num2"
        },
        {
            message: "Select Operator ",
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "operator"
        },
    ]);
    let result = calculator(ans.Num1, ans.Num2, ans.operator);
    console.log(`Result: ${result}`);
}
main();
