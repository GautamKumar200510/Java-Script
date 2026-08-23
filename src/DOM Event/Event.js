// let btn = document.querySelector("button");
// console.log(btn);

// btn.oneclick = function(){
//     console.log("button was clicked");
// };

// OnMouseEnter

// let btn = document.querySelector("button");

// for(btn of btns){
//     btn.oneclick = sayHello;
//     btn.onmouseenter = function () {

//     };
//     console.log(btn);
// }


// function sayHello(){
//        alert("Hello!");
// }



// EventListener


// let btn = document.querySelector("button");

// for(btn of btns){
//     // btn.oneclick = sayHello;
//     //  btn.oneclick = sayName;

//     btn.addEventListener("click", sayHello);
//      btn.addEventListener("click", sayName);
  
// }


// function sayHello(){
//        alert("Hello!");
// }

// function sayName(){
//        alert("Apna College");
// }


// Event Listener for the element

let p = document.querySelector("p");

p.addEventListener("click" , function (){
    console.log("parah was clicked");
});

let box = document.querySelector("mouseenter", function () {
    console.log("mouse inside div");
});


