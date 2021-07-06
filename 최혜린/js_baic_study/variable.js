//1.Use strict
//added is Es 5
// use this for Valina Javascript

'use strict';

//2. variable ,rw(read/write)
//let(added in Es6) :변수 선언할수있다. 자바스크립트에서 이것만 쓸수있다 
let globalName ='global name';
//글로벌 변수는 언제 어디서든 가져쓸수있다. 
//mutable datea
{
let name = 'hyerin';
console.log(name);
name='hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope
{
age =4;
var age;
}
console.log(age);

//3.contant ,r(read only)
//use const whenever possible;
//only use let if variable needs to change.
//favor immutable data type always for a few reasons;
//절대 바꾸지 못한다.
// -security
// -thread safety
// -feduce human mistakes

const daysInWeek =7;
const maxNumber =5;

//Note!
//Immutable data types:premitive types,frozen objects(i.e. object.freeze())
// Mutable data types : all objects by default are butable in JS
//favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes



//4. Variable types
//primitive,single item : number,string,boolean,null,undefidn,symbol
//object,boxcontainer(싱글을 묶어서 하나로 해준다.)
//primitive와 object는 다른 방식으로 저장된다. primitive는 값이 저장공간에 바로 저장된다. 반대로 object는 ref를 통해 가르키는건다.
//function ,first-class function (함수의 리턴에서도 함수를 부를수있다.)

const count =17; //integer
const size =17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size},type: ${typeof size}`);


//number -speicla numeric values : infinity, -infinity ,NaN
const infinity =1/0;
const negativeInfinity =-1/0;
const nAn ='not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new,dont 't use it yet)
const bigInt =123456789012345678901234567890n; //over(-2**53) ~2*53)
console.log(`value: ${bigInt},type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string 
const char ='c';
const brendan ='brendan';
const greeting ='hello'+brendan;
console.log(`value:${greeting},type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string) : ₩ $ ! 변수의 값이 자동적으로 붙어서 나온다. 
console.log (`value: ${helloBob},type : ${typeof helloBob}`);
console.log('value: '+helloBob+'type: '+typeof helloBob); 
// 원래대로라면 이런식으로 출력해야하지만 ₩(백틱)을이용하면 쉽게 출력할수있다.

//boolean
//false :0,null,undefined,NaN,''
//true : any other value
const canRead =true;
const test =3<1; //false
console.log(`value:${canRead},type : ${typeof canRead}`);
console.log(`value: ${test},type:${typeof test}`);

//null
let nothing =null;
console.log(`value:${nothing},type:${typeof nothing}`);

//undefined
let x = undefined; //or let x;
console.log(`value:${x},type:${typeof x}`);

//symbol,create unique identifiers for objects
const symbol1=Symbol('id');
const symbol2 =Symbol('id');
console.log(symbol1===symbol2);
//다른 심볼
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true
//같은 심볼
console.log(`value: ${symbol1.description},type: ${typeof symbol1.description}`)

//object , real-life object,data structure
const hyerin ={name :'hyerin',age:20};
hyerin.age =21;

//5. Dynamic typing(다이나믹 타이핑) : dynamically typed language -> 타입스크립트
let text ='hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text},type:${typeof text}`);
text = 1;
console.log(`value: ${text},type : ${typeof text}`);
text ='7' + 5 ;
console.log(`value: ${text},type:${typeof text}`);
text ='8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);