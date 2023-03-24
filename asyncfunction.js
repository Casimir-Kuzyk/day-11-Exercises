// const prompt = require('prompt-promise');

// const myVar = 'string';


// prompt('give a greeting\n').then(myGreeting => {
//     console.log(myGreeting);
// });
// console.log(myVar)

// //define our own async function that use callbacks or promises

// const myArray = [1,3,5,7,9];
// const has7 = myArray.includes(7);
// console.log(has7);
// const seven = myArray.find(function(test){
//     if (test === 7) return true;
//     return false;
// });
// // .find is equivalent to this:
// for (let i=0; i<myArray.length;i++){
//     const number = myArray[i];
//     if (number === 7) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(seven);

//below function takes a single argument, a function, then calls it
// function takesFunctionpass5(fn) {
//     console.log('about to call function');
//     fn(5);
//     console.log('done running function');
// }
// takesFunctionpass5(function(number){
//     console.log(number+5);
// })

//callbacks are one way to do async programming. we can pass in functions as arguments
//we can also use promises.
//promises PROMISE to do something. they dont do it now, they might, or might later.
//so you can not store the result of the function in a variable, like this:
//const myResult - mypromisefuinction();
//this won't work..

function doThing(){
    return new Promise(function(hello){
        setTimeout(() => hello(5), 1*1000);
    })
}

// doThing().then(function(result){
//     console.log('got result from resolved promise', result);
// });

async function main(){
    const result = await doThing();
    console.log(result);
}
main();
let cooldownAvailable = true;
//for example in a game a cooldown would be like the following function
function useAbility(){
    if (!cooldownAvailable) return false;
    console.log('using the cooldown');
    const fiveSecs = 5*1000;
    setTimeout(function(){
        cooldownAvailable = true;
        console.log('cooldown is ready!');
    }, fiveSecs);
}
useAbility();


const messages = ['hello','@everyone','hi'];
//discord bot example. it waits for messages to come in
function bot(fn){
    setInterval(function(){
        const message = messages[Math.floor(Math.random()*messages.length)];
        console.log('debug',message)
        fn(message);
    },3*1000);
}

bot(function(message){
    //if the message that came in has @everyone in it, we want to respond a certain way.
    if (message.includes('@everyone')){
        console.log('ok');
    }else{
        console.log('nope');
    }
    console.log(message);
})