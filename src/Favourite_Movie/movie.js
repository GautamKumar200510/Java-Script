const favourite = "avatar";

let guess = prompt("Guess my favourite movie:");

while (guess !== favourite && guess !== "quit") {
    guess = prompt("Wrong guess. Please try again:");
}

if (guess === favourite) {
    console.log("Correct! 🎉");
} else {
    console.log("You quit the game. Try again!");
}