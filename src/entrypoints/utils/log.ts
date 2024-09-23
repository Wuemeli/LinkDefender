import chalk from 'chalk';

export function log(message: string, mode: string) {
    const emojiMap = {
        info: "\u{1F321}",
        safe: "\u{1F525}",
        unsafe: "\u{26A0}",
        warn: "\u{26A0}",
        error: "\u{26D4}"
    };
    
    //@ts-ignore
    let emoji = emojiMap[mode] || "\u{1F321}"; 
    let formattedMessage = `${emoji} ${message}`;

    switch (mode) {
        case "info":
            return console.log(chalk.blue(formattedMessage));
        case "safe":
            return console.log(chalk.green(formattedMessage));
        case "unsafe":
            return console.log(chalk.red(formattedMessage));
        case "warn":
            return console.log(chalk.yellow(formattedMessage));
        case "error":
            return console.log(chalk.red(formattedMessage));
        default:
            return console.log(chalk.white(formattedMessage));
    }
}