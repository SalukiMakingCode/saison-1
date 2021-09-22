// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
document.getElementById("run").addEventListener("click", ()=>{
    if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {
        document.getElementById("pass-one").style.borderColor="red";
        document.getElementById("pass-two").style.borderColor="red";
    }
})


})();
