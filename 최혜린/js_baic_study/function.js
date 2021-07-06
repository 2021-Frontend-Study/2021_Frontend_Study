//Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a values

// 1. Function declaration
// function name(pram1,param 2){body ...retrun;}
// one function === one thing
// naming : doSomething ,command , verb (동사나 무언가를 하는것을 이름으로 지정)
// e.g. createCardAndPoint -> createCard, createPoint (함수는 하나씩만 쓸것 )
// function is object in JS (자바스크립트에서 함수는 object이다. 그렇기 때문에 변수에 반환할수도있다. )

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2.parameters
//premitive parameters : passed by value
// object parameters : passed by reference
function changename(obj) {
    obj.name = 'coder';
}
const hyerin = { name: 'hyerin' };
changename(hyerin);
console.log(hyerin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message}by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));

}
printAll('dream', 'coding', 'hyerin');

//5. Local scope
//밖에서는 안이 보이지않고 안에서만 밖을 볼수있다. 
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//Return a value 
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);//3
console.log(`sum: ${sum(1, 2)}`);

//7.Early return,early exit

//bad 
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic ...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


//First -calss function 
//functions are treated like any other variable
// can be assigned as a value to variable
//can be passed as an argumentn to other functions.
//can be returned by another function

//1.Function expression
//a fucntion declaraton can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () { //anoymous function 
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2.callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function 
//always anonymous 
// const simplePrint =function(){
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simlePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression 
(function hello() {
    console.log('IIFE');
})();

// quiz time
// function calculate (command,a,b)
//command:add,substract,divide,multiply,remainder


function calculate(command, a, b) {
    switch (command) {
        case 'add':
            console.log(a + b);
            break;
        case 'substract':
            console.log(a - b);
            break;
        case 'divide':
            console.log(a / b);
            break;
        case 'multiply':
            console.log(a * b);
            break;
        case 'remainder':
            console.log(a % b);
            break;
        default:
            console.log('please write righth command');
    }
}

calculate('remainder',10,3 );