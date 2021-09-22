// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons()
            .catch(err => console.error("Not working"))
            .then((persons) => {
                console.log(persons);
            })
    });
})();
