#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
//import figlet from "figlet";

let todoList : string[] = [];

async function continuation() {
    const response = await inquirer.prompt ([
        {
            name    : "repeat",
            type    : "list",
            choices : ["Yes", "No"],
            message : "Do you want to make any Changes to your To Do List" 

        }
    ]);

    return(response.repeat === "Yes")?true : false;

}

async function list() {

    let again = true;

    do {

    const response : {todo : string} = await inquirer
    .prompt ([
        {
            name    : "todo",
            type    : "list",
            choices : ["Add Item", "Display", "Remove Item"],
            message : "Please provide your desired action!"
        }
    ]);

        if (response.todo == "Add Item") {
            const ans1 = await inquirer .prompt([
                {
                name    : "item",
                type    : "input",
                message : "Please make the desired Additions to your To Do List"
                }
            ]);

            todoList.push(ans1.item);
            again = await continuation();

        }

        else if (response.todo == "Display") {

            if(list.length < 0) {

                console.log(" Nothing found in your To Do List");

            }

            todoList.forEach(todoList => console.log(todoList)); // "element" will console the items in the List One by One
            //forEach is a built in Function asking you for a CALLBACK Function
            again = await continuation();

        }

        else if (response.todo == "Remove Item") {

            /*{
                console.log("Your To Do List is EMPTY");

            }*/

            const removeItem :{remove : string} = await inquirer.prompt ([
                {
                name    : "remove",
                type    : "input",
                message : "Which Item you need to REMOVE from your To Do List"
                }

            ])
            
            let index = todoList.indexOf(removeItem.remove);
            console.log(index);

            let todoList1= todoList.splice(index, 1);
    
            again = await continuation();

            
        }
    
}


while(again !== false);

}

/*setTimeout(() => {
list();
},1000);*/

list();









