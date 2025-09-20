import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Available commands:");
    // iterate over ALL commands in the registry (passed in)
    for (const [name, command] of Object.entries(commands)) {
        console.log(`${name}: ${command.description}`);
    }
}