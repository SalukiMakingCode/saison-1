// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("keydown", ()=>{
        document.getElementById("counter").textContent=document.getElementById("pass-one").value.length+1+"/10";
        if (document.getElementById("pass-one").value.length>=9) {

            let newString=document.getElementById("pass-one").value.slice(0, 9);
            document.getElementById("pass-one").value=newString;
            document.getElementById("counter").textContent=document.getElementById("pass-one").value.length+1+"/10";
        }
    })

})();
