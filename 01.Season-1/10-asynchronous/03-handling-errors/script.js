// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, array) => {
                if (error) {
                    console.log("Il y a une erreur");
                }
                else {
                    array.forEach(element => {
                        console.log(element)
                    });
                }
        })
    })
})();
