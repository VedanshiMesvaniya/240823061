const fs = require('fs');

let comd = process.argv[2];
let task = process.argv[3];
const file = 'todo.json';

if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify([]));
}
let tasks = JSON.parse(fs.readFileSync(file));
// Add task command
if (comd === 'add') {
    tasks.push(task);
    fs.writeFileSync(file, JSON.stringify(tasks));
    console.log(`Task "${task}" added.`);
}
//Task list command with optional task number
else if (comd === 'list' && task) {
    let index = parseInt(task) - 1;
    if (index >= 0 && index < tasks.length) {
        console.log(`Task ${task}: ${tasks[index]}`);
    }
    else {
        console.log('Invalid task number.');
    }
}
// List all tasks command
else if (comd === 'list') {
    console.log('Tasks List: \n');
    tasks.forEach((t, i) => {
        console.log(`${i + 1}. ${t}`);
    });
}
// Delete task command
else if (comd === 'del') {
    let index = parseInt(task) - 1;
    if (index >= 0 && index < tasks.length) {
        let removedTask = tasks.splice(index, 1);
        fs.writeFileSync(file, JSON.stringify(tasks));
        console.log(`Task "${removedTask}" deleted.`);
    } else {
        console.log('Invalid task number.');
    }
}
// Unknown command 
else {
    console.log('Unknown command. Use "add", "list", or "del".');
}