'use strict';

//JavaScript is synchronuous.
//Execute the code block by orger after hoisting.
//hoisting : var ,function declaration

console.log('1');
// setTimeout(function() {
//     console.log('2');
// },1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');


//Synchromous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));


//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);


//Call back Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'hyerin' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);

            } else {
                onError(new Error('not found'));
            }

        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'hyerin') {
                onSuccess({ name: 'hyerin', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passwrod');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name},you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);