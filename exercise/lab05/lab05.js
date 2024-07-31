const readline = require('readline-sync');

const givenString = readline.question("Input your String: ");

const wordCount = groupWords(givenString)
console.log(wordCount);

function groupWords(givenString) {
    const words = givenString.replace(/,/gi, "").split(' ');

    let wordCount = {};
    for (const word of words) {
        if (wordCount[word] === undefined) {
            wordCount[word] = 1;
        } else {
            wordCount[word] += 1;
        }
    }

    return wordCount;
}