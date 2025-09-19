import { createInterface } from 'node:readline';
import { commandExit } from "./command_exit.js";

export function cleanInput(input: string):string[] {
    let cleanedInput = input.trim().toLowerCase().split(" ").filter(Boolean);
    return cleanedInput;
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
        name: "help",
        description: "Displays command list",
        callback: soommmmmething...?,
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

    rl.prompt();

    rl.on('line', (input: string) => {
        let cleanedInput = cleanInput(input);
        if(cleanedInput.length === 0){
            rl.prompt();
            return;
        }
        
        //console.log(`Your command was: ${cleanedInput[0]}`);
        
        
        rl.prompt();
    });
}