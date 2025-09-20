import { createInterface } from 'node:readline';
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function cleanInput(input) {
    let cleanedInput = input.trim().toLowerCase().split(" ").filter(Boolean);
    return cleanedInput;
}
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays command list",
            callback: commandHelp, //console.log("help!"),
        },
        // can add more commands here
    };
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    rl.prompt();
    rl.on('line', (input) => {
        let command = cleanInput(input);
        if (command.length === 0) {
            rl.prompt();
            return;
        }
        try {
            commands[command[0]].callback(commands);
        }
        catch {
            console.log("Unknown command");
            //uneccessary? : rl.prompt;
        }
        //console.log(`Your command was: ${cleanedInput[0]}`);
        rl.prompt();
    });
}
