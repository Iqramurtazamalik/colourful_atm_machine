#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin == myPin) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "accountType",
            message: "Select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Saving Account",
            ]
        },
        {
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices: [
                "Cash Withdrawal",
                "Fast Cash"
            ]
        }
    ]);
    if (atmQuestions.transMethod == "Cash Withdrawal") {
        let cashwithdrawalAmount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        if (totalBalance >= cashwithdrawalAmount.withdrawal) {
            totalBalance -= cashwithdrawalAmount.Withdrawal;
            console.log(`Your Total Balance is: ${totalBalance}`);
        }
        else
            (console.log("Insufficient Balance"));
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "llist",
                choices: [
                    "1000",
                    "3000",
                    "5000"
                ]
            }
        ]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash;
            console.log(`Your Total Balance is: ${totalBalance}`);
        }
        else
            (console.log("Insufficient Balance"));
    }
}
