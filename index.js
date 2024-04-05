#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let MyBalance = 10000;
let MyPin = 102030;
console.log(chalk.yellow("\n\t<<<<<Wellcome To CodeWithFaiz--ATM-Machine>>>>>\n"));
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code:",
    },
]);
if (pinAns.pin === MyPin) {
    console.log(chalk.blueBright("\nYour Pin Is Correct,Login Successfully\n"));
    let operaAns = await inquirer.prompt([
        {
            type: "list",
            name: "operations",
            message: "Select Your Operations To Withdraw;\n",
            choices: ["Withdraw Cash", "Balance Check"],
        },
    ]);
    if (operaAns.operations === "Withdraw Cash") {
        let WithdrawAns = await inquirer.prompt([
            {
                name: "withdrawmethod",
                type: "list",
                choices: ["Fast Cash", "Enter Amount"],
                message: "Select Your Withdraw Operations:\n",
            },
        ]);
        if (WithdrawAns.withdrawmethod === "Fast Cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    choices: [
                        1000, 2000, 3500, 4500, 5000, 7000, 8000, 9000, 10000, 12000, 14000,
                        15000, 20000,
                    ],
                    message: "Select Amount",
                },
            ]);
            if (fastcashAns.fastcash > MyBalance) {
                console.log(chalk.red("\n\nInsufficient Balance!!!!!"));
            }
            else {
                MyBalance -= fastcashAns.fastcash;
                console.log(chalk.green(`\n  ${fastcashAns.fastcash} Rs Successfully Withdraw.`));
                console.log(chalk.greenBright(`\nYour Remaining Balance Is = ${MyBalance}`));
            }
        }
        else if (WithdrawAns.withdrawmethod === "Enter Amount") {
            let AmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Your Amount To Withdraw:",
                },
            ]);
            if (AmountAns.amount > MyBalance) {
                console.log(chalk.red("\n\nInsufficient Balance!!!!!"));
            }
            else {
                MyBalance -= AmountAns.amount;
                console.log(chalk.green(`\n  ${AmountAns.amount} Rs Successfully Withdraw.`));
                console.log(chalk.greenBright(`\nYour Remaining Balance Is = ${MyBalance}`));
            }
        }
    }
    else if (operaAns.operations === "Balance Check") {
        console.log(chalk.greenBright(`\nYour Balance Is ${MyBalance}`));
    }
}
else {
    console.log(chalk.bold.red("\n\nYour Pin Incorrect ! Try Again."));
}
