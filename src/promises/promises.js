// then() and catch()

 let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();
    }, delay);
}


saveToDb("gautam Kumar")
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });


    // Promises Chaining

    // saveToDb("Gautam Kumar")
    // .then(() => {
    //     console.log("data1 saved");
    //     return saveToDb("helloworld");
    // })
    // .then(() => {
    //     console.log("data2 saved");
    // })
    // .catch(() => {
    //     console.log("promise was rejected");
    // });


    // Result error in promises

    saveToDb("apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise: ", result);
        return saveToDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise: ", result);
        return saveToDb("shradha");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    });

