// 객체의 기초
// 1) ㅡ객체 리터럴
// 객체는 데이터 여러개를 하나로 모은 복합테이터

// 객체의 포함된 테이터 하나를 프로퍼티라구 부릅니다.  프로퍼티의 이름부분ㅇ르 프로퍼티 이름또는 키


var card={suit:"하트",rank:"A"};
// _>{}부분이 바로 객체 리터럴 이며, card에 객체리터럴을 삽입하고있는 구문입니다. 
//     프로퍼티 이름과 값은 :을 이용해서 구분하는모습이고 각자의 프로퍼티는 , 를 통해 구분합니다.

card.suit //하트
card["rank"
]//A
형식으로 부릅니다. 
card.color처럼 없는 것을 부르면 undefined를 반환합니다.card
var obj={};
console.log(obj);

card.value=14;
console.log(card);
//suit: "하트", rank: "A", value: 14}

card.value=14ㄹ를 통해 card에 밸류와 14의 값을 추가할수있다
delete card.rank;
를 통해서 지울수도이ㅆ다.

var card ={suit:"하트",rank:"A"};
console.log("suit" in card);
console.log("color" in card);
in 연산자로 프로퍼티가 존재하는지 아는지 확인할수있다. 
console.log("toString" in card);
위에 구문을 추가햇을떄 true로 나오는데 그이유는 to String프로퍼티가 card가 object객체를 상속받았기 땜ㄴㅇ비니다.String프로퍼티가

객체 리터럴 예제
var p ={x:1.0,y:2.5};
-> 좌표평면의 점을 표현하는 객체
var circle={
    center : {x:1.0,y=2.0},radius:2.5
};
-> 원을 표현하는 갳ㄱ체
var person ={
    name:"이정규",
    age :18,
    sex:"남",
    married:false 
};
회원정보를 표현하는 갳ㄱ체



var a=card;
console.log(a.suit);
a.suit = "스페이드 ";
console.log(a.suit);
console.log(card.suit);
객체는 참조 타입이기 위의 구문을 실행햇을때 하트,스페이드,스페이드로 오류가 나지않고 잘 실행된다.