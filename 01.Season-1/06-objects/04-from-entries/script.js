// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", "9", "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", ()=>{

        const arr= [ [keys[0], values[0]], [keys[1], values[1]], [keys[2], values[2]], [keys[3], values[3]], [keys[4], values[4]] ];
        const obj = Object.fromEntries(arr);
        console.log(obj);
    })

})();
