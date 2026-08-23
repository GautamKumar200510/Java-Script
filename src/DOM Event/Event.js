// let btn = document.querySelector("button");
// console.log(btn);

// btn.oneclick = function(){
//     console.log("button was clicked");
// };

// OnMouseEnter

let btn = document.querySelector("button");

for(btn of btns){
    btn.oneclick = sayHello;
    btn.onmouseenter = function () {

    };
    console.log(btn);
}


function sayHello(){
       alert("Hello!");
}
