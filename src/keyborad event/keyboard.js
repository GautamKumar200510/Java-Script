let btn = document.querySelector("button");

btn.addEventListener("Click", function (event){
    console.log(event);
    console.log("button clicked");
});
 
// Double click

btn.addEventListener(" double Click", function (event){
    console.log(event);
    console.log("button clicked");
});

// Keydown


// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (){
   
//     console.log("key was pressed");
// });


// Key Up


let inp = document.querySelector("input");

inp.addEventListener("keyup", function (){
   
    console.log("key = ", event.key);
    console.log("key = ", event.code);
    console.log("key was released");
});

