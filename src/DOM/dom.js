// Selecting Element

let smallImage = documents.getElementByClassName("oldImg");

for(let i =0; i<small.length;i++){
    smallImage[i].src = "spidernman_img.png";
    console.log('value of image no. ${i} is changed ');
}



// Query Selector

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector("oldImg"));
console.dir(document.querySelectorAll("div a"));


// Manipulating Style

let links = document.querySelector(".box a");

for (let i=0; i<links.length; i++){
    links[i].style.color ="yellow";

}