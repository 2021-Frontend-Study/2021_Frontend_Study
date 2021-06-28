내장 생성자 : 처음부터 사용할수 있는 내장 객체가 마련되어있습니다.내장객체는 자바스크립트라는 프로그래밍 언어늬 뼈대를 구성합니다. 

대표적인  Date생성자가있습니다.

var now =new Date();
: 이문장을 실행하면 실행한 시점의 날짜와 시간을 now라는 변수에 대입합니ㅏㄷ. 그후
console.log(now);를 부르면 Date{그때 그시간}형태로 출력이 됩니다.
형태로 쓰며, 시간날짜 처리를 간단하게 할수있습니다.Date생성자가있습니다. 

var start =new Date();
var end =new Date();
var elapsed = end -start;  같은 프로그램을 만들수있습니다.Date생성자가있습니다
Date 객체의 주요메서드 종류는 
now.getFullYear() 
now.getMonth()
now.getDate()
now.getDay()
now.getHours()
now.getMinutes()
now.getSeconds()등등
가있고 이 메서드들은 날짜와 시간을 다룰때 유용하게 사용 할수있습니다. 

Function 생성자도 많이 쓰이는 함수중 하나입니다. 
var square = new Function ("x","return x*x");
형태 즉 var 변수이름 = new Function(첫번째 인수, ...ㅡn번쨰 인수, 함수몸통); 형태로 쓰입니다.