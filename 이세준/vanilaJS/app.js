const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const color = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const saveBtn = document.getElementById("jsSave")
const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700

canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

ctx.fillStyle = "white"
ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE)
ctx.strokeStyle =  INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = 2.5

let painting = false
let filling = false

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    //확인용 console.log(event)
    const x = event.offsetX

    const y = event.offsetY
    //console.log(x , y)
    if (!painting) {
        ctx.beginPath();
        //path는 선
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

// startPainting 으로 대체 마우스 클릭 function onMouseDown (event) {   painting = true }
// stopPainting으로 대체 마우스 클릭 해제 function onMouseUp (event) {   stopPainting() }

function handleColor(event) {

    const colors = event.target.style.backgroundColor
    // console.log(colors)
    ctx.strokeStyle = colors
    ctx.fillStyle = colors
}

function handleRangeChange(event) {
    const size = event.target.value
    //  console.log(event.target.value)
    ctx.lineWidth = size;
}

function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"
       
    }

}

function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE)
  }
}

function handleCM (event){
  
  event.preventDefault()
 
}
function handleSaveClick(){
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove) //마우스 포인터 동작확인
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("click" , handleCanvasClick)
    canvas.addEventListener("contextmenu", handleCM)
}

//console.log(Array.from(color))
if (color) {
    Array
        .from(color)
        .forEach(color => color.addEventListener("click", handleColor))
}

if (range) {
    range.addEventListener("input", handleRangeChange)
}
if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click" , handleSaveClick)
}