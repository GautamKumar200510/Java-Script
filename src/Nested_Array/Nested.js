// let nums=[[1,2], [3,4] , [5,6] ];
// console.log(nums);
// nums.length


// Nested Loop with Array

let heroes =[["ironman" , "spiderman","thor"] , ["superman", "flash" , "Aqua Man"]]

for (let i=0; i<heroes.length; i++){
    console.log(i,heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log('j=${j} , ${heroes[i][j]}');
    }
}