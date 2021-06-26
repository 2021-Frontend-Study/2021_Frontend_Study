// 함수의 기초

// 자바스크립트에서 함수는 일련의 처리를 하나로 모아 언제든 호출할수있도록 만들어 둔것입니다. 
// 함수의 입력ㄱ밧을 인수로 함수의 출력값을 반환값이라고 부릅니다. 

function square(x){return x*x;}
square(3);
으로 함수를 호출할수있다. 함수이름뒤에 소괄호로 인수를 묶어 입력하면된다.

함수는 인수르 ㄹ여러개 받을수있습니다.

function dist(p,q) {

    var dx = q.x-p.x;
    var dy = q.y-p.y;
    return Math.sqrt(dx*dx+dy*dy);

}
var p1={x:1, y:1};
var p2={x:4, y:5};
var d = dist(p1, p2);
console.log(d);

var bark =function(){console.log("Bow-wow");};
bark ();
console.log(bark());

var sq=square;
console.log(sq(5))
->함수는 객체기 때문에 변수값을 다른 변수에 할당하면 그변수이름으로 함수를 실행할수있습니다. 위에도 square를 sq에 대입해 sq(5)도 가능하빈다.
function add1(x){return x =x+1;}
var a=3;
var b=add1(a);
console.log("a="+a+",b="+b);

function add1(p){ p.x= p.x + 1;p.y =p.y+1;return p;}
var a ={x:3,y:4};
var b=add1(a);
console.log(a,b);

function setBallProperties(x,y,vx,vy,radius){
var parameters={
    x:0,
    y:0,
    vx:10,
    vy:15,
    radius:5,
    color:"blue"
};
setBallProperties(parameters);}