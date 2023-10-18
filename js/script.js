var box1 = document.querySelector(".box-1");
//console.log(box1);//
var box2 = document.querySelector(".box-2");
//console.log(box2);//
var box3 = document.querySelector(".box-3");
//console.log(box3);//
var button = document.querySelector("button");
//console.log(button);//

document.addEventListener("keydown", function(e) {
   // console.log(e);//
 if (e.key === "1") {
    box1.innerText = "❤️";
  } else if (e.key === "2") {
    box2.innerText = "😻";
  } else if (e.key === "3") {
    box3.innerText = "💋";
  }
});
   
button.addEventListener("click", function () {
  box1.innerText = "1";
  box2.innerText = "2";
  box3.innerText = "3";
});