배열은 여러가지의 값을 순차적으로 어떠한 변수에 넣은것입니다. */배열 리터럴은 쉼표로 구분한 값을 대괄호로 묶어서 표현합니다. 
var evens = [2,4,6,8]; //앞코드에서 [ ... ]부분이 배열 리터럴 입니다. 배열 값인 2같은 값은 배열요소로 불리웁니다.
배열 요소에 각각 매겨져있는 번호는 요소번호 또는 인덱스라고 불립니다.

var empty =[];
console.log(empty); 
이것은 emty라느 ㄴ벼열안에 아무런 값도 없기 때문에 empty를 불렀을때 아무런 값도 나오지않을것이다. 
var a =[2, , 4]
배열의 또하나의 특징은 가운데 빈값을 넣어도 널값으로 들어가 0[2],1[],2[4]형식으로 저장된다. 
var various =[3.14,"pi",true , {x:1,y:2},[2,4,6,8]; 형태로 쓴다.

lenght 프로퍼티 특징은var evns = [2,4,6,8]
    evens.length ->4의 값이 나온다. length 프록퍼디값은 배열길이 입니다. 
    var a=[2,4,6,8]
        a.length =2;
        console.log(a) 의 값을 부르면 length 프로퍼티를 이용해 앞에 2개의 값만을 남겨낫으므로 2,4값만이 출력된다. 
    
배열은 또 마지막으로 Array 생성자로 생성할수도있다. 
var evens =new Array(2,4,6,8);var empty =new Array(); var a =new Array(2,4); var various =new Array(3.14,"pi",true,{x:1,y:2},[2,4,6,7]);
형태로 작성한다. 
var x=new Array(3);
console.log(x.length);
형태로 작성하면 array 3개의 값을 작성하고 그x의길이를 인쇄하면 3이라는 값이 나온다는것을 알수있다. 