import * as day1 from './day1/day1.mjs';
import { readFileSync } from 'fs';


const readInputFile = (dayFolder) => {
    const filePath = `./${dayFolder}/input.txt`;
    const input = readFileSync(filePath, 'UTF8');
    return input || undefined;
}

const daysToExec = [
    1, 
    // 2,
    // 3,
    // 4,
    // 5,
    // 6,
    // 7,
    // 8,
    // 9,
    // 10,
    // 11,
    // 12
];

const input = readInputFile(`day1`);
const output = day1.first(input);
console.log("------------------------");
console.log("Challenge result (p1):", output);
console.log();
console.log("------------------------");
const secondOutput = day1.second(input);
console.log("Challenge result (p2):", secondOutput);

