import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let balance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Your Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled.",
        choices: ["Web Development", "Typescript", "MS Office", "App Development"]
    }
]);
const TutionFee = {
    "Web Development": 3000,
    "Typescript": 3500,
    "MS Office": 1000,
    "App Development": 5000
};
console.log(`Tution Fee is ${TutionFee[answer.courses]}/-`);
console.log(`Balance is ${balance}/-`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select the payment method",
        choices: ["EasyPaisa", "JazzCash", "Bank Transfer"]
    },
    {
        name: "amount",
        type: "input",
        message: "Please enter the amount as per course declared",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter the correct amount.";
        },
    }
]);
console.log(`Your payment method is ${paymentType.payment}`);
const TutionFees = TutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (TutionFees === paymentAmount) {
    console.log(`Congratz!!! You have successfully launched in this ${answer.courses} program`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would do next now?",
            choices: ["view status", "exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("**** your status ****");
        console.log(`student name: ${answer.students}`);
        console.log(`student id: ${randomNumber}`);
        console.log(`enrolled course: ${answer.courses}`);
        console.log(`tution fee paid: ${paymentAmount}`);
        console.log(`balance: ${balance += paymentAmount}`);
    }
    else {
        console.log("exiting the student management system");
    }
}
else {
    console.log("Invalid course select");
}
