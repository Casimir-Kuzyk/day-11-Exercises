const prompt = require('prompt-promise');

const myVar = 'hello';
console.log(myVar);

async function doPrompt(){
    const greeting = await prompt('give a greeting');
    console.log(greeting);
}

doPrompt()