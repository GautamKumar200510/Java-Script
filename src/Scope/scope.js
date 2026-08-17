let sum = 54; // Global Scope

function calsum(a,b){
    let sum = a+b;  //  Function Scope
    console.log(sum);
}

calsum(1,2);
console.log(sum);


// Block Scope

for(let i= 1 ; i<=5 ; i++){
    console.log(i);   // Block Scope
}

// console.log(i);


// Lexical Scope

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}