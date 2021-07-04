const images = [ "0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html에 사용할 태그를 만듦

bgImage.src = `img/${chosenImage}`; // bgImage 속성에 src 값 추가

document.body.appendChild(bgImage); // body 태그에 bgImage 태그 html 요소 추가