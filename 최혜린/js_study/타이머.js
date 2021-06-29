setTimeout(function(){
    console.log(new Date());
},2000);
var timer = setTimeout(function(){...},20000);
clearTimeout(timer);

setInterval(function(){
    console.log(new Date());
},1000);

var timer =setInterval(function(){...},1000);
clearInterval(timer);
setInterval("console.log(new Date())",1000);