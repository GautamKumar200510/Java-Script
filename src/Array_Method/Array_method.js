// Array Methods

let cars= ["Bmw", "Audi", "Suzuki", "Thar"]; 
let bike =["Honda" , "Splender" , "Royal Enfield"  ]; 
console.log(cars);
console.log(bike);

cars.push("Toyota");
cars.push("Ferari");
cars.pop();
console.log(cars);
cars.unshift("Mercidies");
console.log(cars);
cars.unshift("swift");
console.log(cars);
cars.shift();
console.log(cars);




// Array Indexof & Includes

cars.indexOf("Audi");
console.log(cars);

cars.includes("Thar");
console.log(cars);


// Array Concatenation



cars.concat(bike);

bike.reverse();

// Array Slice  & Splice

cars.slice(2);

cars.splice(1);

bike.splice(1,3);

// Sort in Array

cars.sort();

let day=["mon", "tue", "wed", "thur" ," frid" , "sat"];
console.log(day);
day.sort();

