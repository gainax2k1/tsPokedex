export function commandHelp(commands) {
    console.log("Available commands:");
    // iterate over ALL commands in the registry (passed in)
    for (const [name, command] of Object.entries(commands)) {
        console.log(`${name}: ${command.description}`);
    }
}
