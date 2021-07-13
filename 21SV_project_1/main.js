let target = document.querySelector("#dynamic");
let stringArr =["21SV 여름프로젝트"];
function typer_String(){
    let selectString = stringArr[0];
    let selectStringArr = selectString.split("");
    
    return selectStringArr;
}

function typer_text(stringArr){
    if(stringArr.length>0){
        target.textContent += stringArr.shift();
        setTimeout(function(){
            typer_text(stringArr);
        },300);
    }
}
typer_text(typer_String());


function blink() {
    target.classList.toggle("active");
}
