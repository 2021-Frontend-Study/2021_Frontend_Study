const canvas =document.getElementById("jsCanvas"); 
// const선언은 블록범위의 상수를 선언합니다. const =상수의 이름 =상수의 값 형태로 사용됩니다.
// document.getElementById메서드는 주어진 문자열과 일치하는 id속성을 가진 요소를 찾고 이를 반환합니다.
// 즉 위에 구문은 canvas라는 변수에 jsCanvas라는 id속성을 찾아 넣는것입니다.
const ctx=canvas.getContext("2d");
// 캔버스의 드로잉 컨텍스트를 반환합니다. 
// var ctx = canvas .getContext(contextType); 형태로 작성합니다. 
// contextType에 2d가 들어가있다면 2차원 렌더링 컨테츠를 반환하는것입니다.
const colors = document.getElementsByClassName("jsColor");
// getElementsByClassName은 주어진 클래스를 가진 모든 자식 엘리먼트를 반환하는것입니다. 
// 즉 colors안에 jsColor에 클래스를 가진 모든 자식 엘리먼트를 반환합니다.
const range = document.getElementById("jsRange");
// jsRange와 일치한 id속성의 값을 range에 반환합니다.
const mode =document.getElementById("jsMode");
// jsMode와 같은 id속성의 값을 mode에 반환합니다.
const saveBtn = document.getElementById("jsSave");
// jsSave라는 id를 가진 값을 saveBtn에 반환합니다.
const INITIAL_COLOR="#2c2c2c"
// INITIAL_COLOR dp #2c2c2c를 선언합니다.
const CANVAS_SIZE =700;
// CANVAS_SIZE를 700으로 선언합니다.
canvas.width =700;
canvas.height=700;
//실제 픽셀 사이즈를 주지않으면 실행 이 되지않는다.
// 캔버스의 가로와 세로를 700으로 설정해줍니다.
ctx.strokeStyle=INITIAL_COLOR;
ctx.lineWidth=2.5;

ctx.fillStyle ="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
ctx.fillStyle= INITIAL_COLOR;


canvas.width=CANVAS_SIZE;
canvas.height =CANVAS_SIZE;

let painting = false;
// let 구문은 블록 유효범위를 갖는 지역변수를 선언하며, 선언과 동시에 값으로 초기화 할수있습니다.
let filling =  false;
// let 구문은 블록 유효범위를 갖는 지역변수를 선언합니다.

function onMouseMove(event){
    // event에 콜백과 리스너 현재 여기는 function 부분으로 콜백이라고합니다. 
    // 아래에서의 addEventListenr에서의 리스너로 불린 이벤트를 콜백으로 가져왔습니다.
    const x=event.offsetX;
    // x에 마우스의 x좌표값을 삽입한다.
    const y=event.offsetY;
    // y에 마우스의 y 좌표값을 삽입한다.
    if(!painting){
        ctx.beginPath();
        // beginPath 는 새로운 경로를 만듭니다. 경로가 생성됬다면 그리기 명령들은경로를 구성하비낟.
        ctx.moveTo(x, y);
        //path는 라인이다. 
        // pan을 지정한 x,y로 옮깁니다. 
    }else{
        
        ctx.lineTo(x, y);
        // ctx.lineTo 는 서브경로와 마지막 지점을 연결하여 x,y를 조정한다.
        ctx.stroke();
        // 윤곽선을 이용하여 도형을 그립니다.
    }
}
function stopPainting(){
    painting=false;
}
function startPainting(){
    painting=true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText ="Fill"
    }else{
        filling =true;
        mode.innerText ="Paint";
        ctx.fillStyle = ctx.strokeStyle;

    }
}
function handleCavasClick(){
    if (filling){
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}
function handleCM(event){
    event.preventDefalut();
}
function handleSaveClick(){
    const image = canvas.toDataURL();
    const link =document.createElement("a");
    link.href =image;
    link.download ="Paint[🧹]";
    link.click();
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    // canvas.addEventListener 를 통해 이벤트를 불러오는것이다.
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click" ,handleCavasClick);
    canvas.addEventListener("contextmenu",handleCM);
    
}


Array.from(colors).forEach(color =>color.addEventListener("click",handleColorClick));
// forEach 메서드는 주어진 함수를 배열요소 각각에 대해 실행합니다. 
// arr.forEach(각요소에대해 실행할 함수(처리할 현재요소[처리할현재요소의인덱스]))형태로 작성한다.

if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}
if(saveBtn){
    saveBtn.addEventListener("click",handleSaveClick);
}