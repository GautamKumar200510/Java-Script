// const calculator = {
//     num:55,
//     add: function(a , b){
//         return a+b;
//     },

//     sub: function(a,b){
//         return a-b;
//     },

//     mul: function(a,b){
//         return a*b;
//     }
// };


// Shorthand to not use funtion and diretly use the methods

const calculator = {
    num:55,
    add(a , b){
        return a+b;
    },

    sub(a,b){
        return a-b;
    },

    mul(a,b){
        return a*b;
    }
};