 let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();
    }, delay);
}

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// //setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

// callbacks nesting -> callback hell



// promises

saveToDb(
    "apna college",
    () => {
        console.log("success1 : your data was saved");

        saveToDb(
            "hello world",
            () => {
                console.log("success2: data2 saved");

                saveToDb(
                    "shradha",
                    () => {
                        console.log("success3: data3 saved");
                    },
                    () => {
                        console.log("failure3 : weak connection");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("failure1 : weak connection");
    }
);