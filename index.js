#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.bold.rgb(204, 204, 204)("\n \t ((((((((((((((((()))))))))))))"));
console.log(chalk.blue("\t wellcome to the new challenge"));
console.log(chalk.bold.rgb(204, 204, 204)("\t ((((((((((((((((()))))))))))))\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.italic.bold("Select an option :"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Task", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await Updatetask();
        }
        else if (option.choice === "View Task") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.italic.bold("Enter your new task :")
        }
    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} is added in your today's task!`);
};
let viewTask = () => {
    console.log(chalk.italic.bold("\n Your today's task is : \n"));
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.italic.bold("Enter the index.no of the task you want to delete : ")
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.italic.bold(`\n "${deletedTask}" is deleted from your today's task!`));
};
let Updatetask = async () => {
    await viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "updateIndex",
            type: "number",
            message: chalk.italic.bold("Enter the index.no of the task you want to update :")
        },
        {
            name: "new_task",
            type: "input",
            message: chalk.italic.bold("Now enter a new task :")
        }
    ]);
    todoList[updateTaskIndex.updateIndex - 1] = updateTaskIndex.new_task;
    console.log(chalk.italic.bold(`\n Task at index.no ${updateTaskIndex.updateIndex - 1} updated. For check click on View Task`));
};
main();
