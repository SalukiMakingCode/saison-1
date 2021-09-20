// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let myObject = {
            lastname: 'Van Goidtsnoven',
            firstname: 'David',
            age: 41,
            city: "Charleroi",
            country: "Belgium"
        };
        console.log(myObject);
    })

})();