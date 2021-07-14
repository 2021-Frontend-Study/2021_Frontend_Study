let target = document.querySelector("#dynamic");
let stringArr = ["21SV 여름프로젝트"];
function typer_String() {
    let selectString = stringArr[0];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function typer_text(stringArr) {
    if (stringArr.length > 0) {
        target.textContent += stringArr.shift();
        setTimeout(function () {
            typer_text(stringArr);
        }, 300);
    }
}
typer_text(typer_String());


function blink() {
    target.classList.toggle("active");
}


const secIntro = document.querySelector(".secIntro");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const intro = document.querySelector(".Intro");
const Sec_1 = document.querySelector(".Sec_1");
const Sec_2 = document.querySelector(".Sec_2");
secIntro.addEventListener("click", () => window.scrollTo({ top: intro.offsetTop, behavior: 'smooth' }));
section1.addEventListener("click", () => window.scrollTo({ top: Sec_1.offsetTop, behavior: 'smooth' }));
section2.addEventListener("click", () => window.scrollTo({ top: Sec_2.offsetTop, behavior: 'smooth' }));

// 7/14 11:27 신찬우 수정
function upnav() {
    document.addEventListener('scroll', onScroll, { passive: true });
    let last = 0;
    const gap = 1; 
    const Top_Menu = document.querySelector(".Top_Menu"); 
    const containerheight = document.querySelector(".container").clientHeight;

    function onScroll() {
        const scrollposition = pageYOffset;
        // console.log(`라스트: ${last}, 스크롤포지션: ${scrollposition}, 컨테이너 높이: ${containerheight}`);
         if (Math.abs(last - scrollposition) <= gap) return;
        else if (scrollposition > last) {
            Top_Menu.classList.remove("downdown");
        } else if (scrollposition < last) {
            Top_Menu.classList.add("downdown");
        }
        last = scrollposition;
    }
}
upnav();