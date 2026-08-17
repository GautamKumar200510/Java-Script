let sum = 54; // Global Scope

function calsum(a,b){
    let sum = a+b;  //  Function Scope
    console.log(sum);
}

calsum(1,2);
console.log(sum);


// Block Scope

