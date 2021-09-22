// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    document.getElementById("target").innerHTML = localStorage.getItem("nbClick");

    document.getElementById("increment").addEventListener("click",() =>{
    let nbClick=Number(localStorage.getItem("nbClick"));
    nbClick++;
    localStorage.setItem("nbClick", nbClick);
// Retrieve
    document.getElementById("target").innerHTML = localStorage.getItem("nbClick");
    })

})();
