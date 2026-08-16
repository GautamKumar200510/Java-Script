const max = prompt("Enter the max number");


const random = Math.random() * max

// console.log(random);

let guess = prompt("Guess the Number");

while(true){
    if(guess == "quit") {
        console.log(" user quit");
        break;
    }

    if (guess == random){
        console.log("you are right.. Congrats!!");
        break;
    } else if(guess< random){
        guess = prompt("Your guess was too small");
    } else{
 guess = prompt("Your guess was too large");
    }
    
    // else{
    //     prompt("Wrong  Tryy again!!!");
    // }
}