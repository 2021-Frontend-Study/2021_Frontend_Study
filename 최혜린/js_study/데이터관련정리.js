var sym1 =Symbol();
var sym2=Symbol();
console.log(sym1==sym2);
실행하여 보면 값이 false로 나오는걸로 보아 둘이 다르다는걸 알수잇다. 이를 통해 Symbol은 호출할때마다 새로우누 값을 만든다는것을 알수잇다.Symbol
var HEART =Symbol("하트");
Symbol 안에 인수를 전달하면 심벌의 설명을 덧붙일수있습니다.
console.log(HEART.toString()) // -> symbol(하트)
이다. 


var sym1=Symbol.for("club");
var sym2=Symbol.for("club");
console.log(sym1==sym2);
Symbol.for 을 이용하면 문자열과 연결된 심벌을 생성할수있습니다.


var sym1=Symbol.for("club");
var sym2=Symbol("club");
console.log(Symbol.keyFor(sym1));
console.log(Symbol.keyFor(sym2));

위에 코드를 보면 sym1은 Symbol.for을 이용해 sym1에 정상적으로 club으로 들어갓는데
sym2는 symbol밖에 없어서 for이 없기때문에 sym2에 정상적으로 club에 들어가지않는다. 
그렇기 때문에 key for을 이용해서 부르면 sym1은 정상적으로 club이 나오고 sym2는 값이 나오지않는다.

템플릿 리터럴 : 역따옴표로 묶은 문자열입니다. 
템프릿 리터럴을 사용하면 표현식의 값을 문자열에 추가하거나 여러줄의 문자열을 표현할수있습니다.
var a=2,b=3;
console.log(`${a}+${b}=${a+b}`);
var now=new Date();
console.log(`오늘은 ${now.getMonth()+1}월${now.getDate()}일입니다.`);
위 태그는 보간표현식을 이용한것입니다
템플릿 리터럴 안에는 플레이스 홀더를 넣을수있습니다. 

