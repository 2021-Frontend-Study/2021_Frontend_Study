//Objects
//one of the JavaScript's data types. 
// a collection of related data and /or functionality.
// Nearly all objects in JavaScript are instances of Object
// object ={key:value};

// 1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const hyerin = { name: 'hyerin', age: 4 };
print(hyerin);

//with JavaScript magic(dynamically typed language)

// cna add properties later
hyerin.hasJob = true;
console.log(hyerin.hasJob);

//can delete properties later
delete hyerin.hasJob;
console.log(hyerin.hasJob);

// 2. Computed prorperties 
//ㅏ됴 놰ㅕㅣㅇ ㅠㄷ 밎묜 ㄴㅅ갸ㅜㅎ
console.log(hyerin.name);
console.log(hyerin['name']);
hyerin['hasJob'] = true;
console.log(hyerin.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}
printValue(hyerin, 'name');
printValue(hyerin, 'age');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('hyerin', 30);
console.log(person4);

//4. Constuctor Function 
function Person(name, age) {
    //this ={} ; 생략
    this.name = name;
    this.age = age;
    //return this;생략
}

//5. in operator : property existence chect (key in obj)
console.log('name' in hyerin);
console.log('age' in hyerin);
console.log('random' in hyerin);
console.log(hyerin.random);

//6. for ..in vsfor..of
//for (key in obj)
console.clear();
for (key in hyerin) {
    console.log(key)
}

//for(value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
//object.assign (dest , [obj1,obj2,obj3...])

const user = { name: 'hyerin', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);