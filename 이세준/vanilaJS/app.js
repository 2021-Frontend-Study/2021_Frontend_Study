const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const color = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsMode")

ctx.lineWidth = 2.5;

canvas.width = 700
canvas.height = 700

let painting = false

function startPainting() {
  painting = true;
}

function stopPainting () {
  painting = false;
}

function onMouseMove(event) {
    //확인용 
    //console.log(event)
    const x = event.offsetX

    const y = event.offsetY
    //console.log(x , y)
    if(!painting){
      ctx.beginPath();
      //path는 선
      ctx.moveTo(x,y);
    }else{
      ctx.lineTo(x,y);
      ctx.stroke();
    }
}




//startPainting 으로 대체
// //마우스 클릭
// function onMouseDown (event) {
  
//   painting = true
// }

//stopPainting으로 대체
//마우스 클릭 해제
// function onMouseUp (event) {
//   stopPainting()
// }

function handleColor(event){
  
  const colors = event.target.style.backgroundColor
 // console.log(colors)
  ctx.strokeStyle = colors
}

function handleRangeChange(event){
  console.log(event)
}

if(canvas){
  canvas.addEventListener("mousemove" ,onMouseMove)//마우스 포인터 동작확인
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseup" , stopPainting)
  canvas.addEventListener("mouseleave" , stopPainting)
}

//console.log(Array.from(color))
if(color){
  Array.from(color).forEach(color => color.addEventListener("click" ,handleColor))
}

if(range){
  range.addEventListener("input", handleRangeChange)
}