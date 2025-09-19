import { createInterface } from 'node:readline';
export function cleanInput(input) {
    let cleanedInput = input.trim().toLowerCase().split(" ").filter(Boolean);
    return cleanedInput;
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on('line', (input) => {
        let cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${cleanedInput[0]}`);
        rl.prompt();
    });
}
