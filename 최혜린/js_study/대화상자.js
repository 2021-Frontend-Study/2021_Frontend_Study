alert("안녕하세요!"); // 경고 대화창에 안녕하세요라고 띄운다. 
var name = prompt("이름을 입력하십시오"); // 입력 대호ㅓㅏ상자를 표시합니다. 
var name = prompt("이름을 입력하십시오 ", "이현규")
var age = parseInt(prompt("나이를 입력하십시오"))//나이를 입력받을수있는 창을 띄운다.
var height = parseFloat(prompt("키를 입력하십시오 ")); // 실수를 입력받을수있ㅅ는 창을 띄운다
var ret = confirm("링크를 표시하시겠습니까?") // 링크를 표시하시겠습니까? 라는 경고창을 띄움

var a =[2,4,6];
console.log("배열",a,"의길이는",a.length + "입니다. ") // 콘솔에 텍스트 출력하기 

console.log("배열"+a+"의길이는"+a.length+"입니다.");

var name="Tom";
var height =172.5;
console.log("그의 이름은 %s 이며 키는 %f cm 입니다",name,height);

var p ={x:1,y:2};
console.dir(p); // object라고 표시된다. 그위유는 객체의 프로퍼티를 나열하는것이기 때문이다. 

console.time("answer_time");
alert("확인 버튼을 누르십시오");
console.timeEnd("answer_time"); //타이머 확인버튼을 눌럿을떄에 시간을 출력한다. 

