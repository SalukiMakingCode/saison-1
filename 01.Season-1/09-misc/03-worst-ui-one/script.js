// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    document.getElementById("slider").addEventListener("change", ()=>{
        document.getElementById("target").textContent="0"+document.getElementById("slider").value;
    })
})();
