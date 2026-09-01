// Select the heading
let heading = document.getElementById("heading");

// Change the text
heading.textContent = "Hello JavaScript";

// Select paragraph
let paragraph = document.getElementById("text");

// Change paragraph
paragraph.textContent = "DOM is very important";

// Select button
let button = document.getElementById("btn");

// Add click event
button.addEventListener("click", function () {
    alert("Button Clicked!");
});