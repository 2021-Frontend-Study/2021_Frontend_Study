const Shin = document.querySelector(".project_Shin");
const Lee = document.querySelector(".project_Lee");
const Choi = document.querySelector(".project_Choi");
const HIDDEN_CLASSNAME = "hidden";

function clickName(event) {
  const target = event.target.className;
  const name = document.querySelector(`.${target}`).innerHTML;
  const project_Shin = document.getElementById("project_Shin");
  const project_Lee = document.getElementById("project_Lee");
  const project_Choi = document.getElementById("project_Choi");
  if (name === "신찬우") {
    project_Shin.classList.remove(HIDDEN_CLASSNAME);
    project_Lee.classList.add(HIDDEN_CLASSNAME);
    project_Choi.classList.add(HIDDEN_CLASSNAME);
  } else if (name === "이세준") {
    project_Shin.classList.add(HIDDEN_CLASSNAME);
    project_Lee.classList.remove(HIDDEN_CLASSNAME);
    project_Choi.classList.add(HIDDEN_CLASSNAME);
  } else if (name === "최혜린") {
    project_Shin.classList.add(HIDDEN_CLASSNAME);
    project_Lee.classList.add(HIDDEN_CLASSNAME);
    project_Choi.classList.remove(HIDDEN_CLASSNAME);
  }
}

Shin.addEventListener("click", clickName);
Lee.addEventListener("click", clickName);
Choi.addEventListener("click", clickName);