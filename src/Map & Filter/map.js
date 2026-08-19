// let students = [
//     {
//         name: "Gautam",
//         marks: 95,
//     },
//     {
//         name: "Brishal",
//         marks: 98.5,
//     },
//     {
//         name: "Roshan",
//         marks: 89.3,
//     }
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });

// console.log(gpa); 


// Filter

// let nums = [1,2,3,4,5,6,7,9];
// let ans = nums.filter((el) => {

//     return el%2 !=0;     // even - trye, odd- false
// });


// Reduce Method

let nums = [1,2,3,4,5,6,7,9];
let finalVal = nums.reduce((res , el) => {
    console.log(res);
    return res +el;
});
console.log(finalVal);