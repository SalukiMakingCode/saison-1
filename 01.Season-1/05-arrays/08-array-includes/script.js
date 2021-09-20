// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
    let itIsIn = false;
    for (elem of fruits) {
        if (elem==="apple") itIsIn=true;
    }
    if (itIsIn) console.log("There is an apple");
    else console.log("There isn't an apple");
    })

 })();
