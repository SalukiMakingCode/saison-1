// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {
            document.getElementById("pass-one").className="error";
            document.getElementById("pass-two").className="error";
        }
    })

})();
