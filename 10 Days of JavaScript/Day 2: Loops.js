'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = "aeiouAEIOU";
    let vowelsList = "";
    let consonantsList = "";

    // Loop through each character of the input string
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        // Check if the current character is a vowel
        if (vowels.includes(currentChar)) {
            vowelsList += currentChar;
        } else {
            consonantsList += currentChar;
        }
    }

    // Print the vowels and consonants lists on separate lines
    // console.log(vowelsList);
    for (let t of vowelsList) 
    {
        console.log(t);
    }
    // console.log(consonantsList);
    for (let t of consonantsList) 
    {
        console.log(t);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
