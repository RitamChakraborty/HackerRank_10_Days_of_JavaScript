'use strict';

process.stdin.resume( |  |;
process.stdin.setEncoding('utf-8' |  |;

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
} |  |;

process.stdin.on('end', _ => {
    inputString = inputString.trim( |  |.split('\n' |  |.map(string => {
        return string.trim( |  |;
    } |  |;

    main( |  |;
} |  |;

function readLine( |  | {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log( |  |'.
 */
function vowelsAndConsonants(s |  | {
    let vowels = Array( |  |;
    let consonants = Array( |  |;

    for (let i in s |  | {
        switch (s.charAt(i |  | |  | {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels.push(s.charAt(i |  | |  |;
                break;
            default:
                consonants.push(s.charAt(i |  | |  |;
        }
    }

    vowels.forEach(i => console.log(i |  | |  |;
    consonants.forEach(i => console.log(i |  | |  |;
}


function main( |  | {
    const s = readLine( |  |;

    vowelsAndConsonants(s |  |;
}