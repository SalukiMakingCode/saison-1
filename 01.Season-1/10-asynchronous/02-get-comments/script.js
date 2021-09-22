// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, array) => {
            array.forEach(element => {
                //On est dans la boucle et element.id donne l'id du post.
                console.log(element.id);
                window.lib.getComments(element.id, (error, comment) => {
                    element.comments=comment;
                    console.log(element);
                });
            });
        })
    })
})();