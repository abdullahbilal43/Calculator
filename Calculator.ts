import { Add,Multiply,Subtract,Divide } from "./Operators.js";
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

console.log(figlet.textSync("CALCULATOR!"));

do {
    let Input = await inquirer.prompt([{
        name: "Num1",
        type: "number",
        message: "Enter First Number:"},
        {
            name: "Num2",
            type: "number",
            message: "Enter Second Number:"},
            {
                name: "Operator",
                type: "string",
                message: "Enter Operation you want To Perform:",
            }
    ]);
    
    if(Input.Operator=="+"){
        let sum = Add(Input.Num1,Input.Num2);
        console.log(chalk.bold.blue("The result is:",sum));
    }
    else if(Input.Operator=="-"){
        let sum1 = Subtract(Input.Num1,Input.Num2);
        console.log(chalk.bold.blue("The result is:",sum1));
    }
    else if(Input.Operator=="*"){
        let sum3 = Multiply(Input.Num1,Input.Num2);
        console.log(chalk.bold.blue("The result is:",sum3));
    }
    else if(Input.Operator=="/"){
        let sum4 = Divide(Input.Num1,Input.Num2);
        console.log(chalk.bold.blue("The result is:",sum4));
    }
    else{
        console.log(chalk.red.bold.italic("You Enter Wrong Operator."));
        break;
    }
    
} while (true);