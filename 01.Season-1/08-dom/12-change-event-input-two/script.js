// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here

    document.getElementById("pass-one").addEventListener("keypress", ()=>{
        let validity=false;
        if (document.getElementById("pass-one").value.length>=7) {
            let i=0;
            let arr=document.getElementById("pass-one").value.split('');
            for (let elem of arr) {
                if (elem==="0" || elem==="1" || elem==="2" || elem==="3" || elem==="4" || elem==="5" || elem==="6" || elem==="7" || elem==="8" || elem==="9" ) i++;
            }
            if (i>1) validity=true;
        }
        else validity=false;
        if (validity) document.getElementById("validity").textContent="Ok";
        else document.getElementById("validity").textContent="Not ok";
    })

})();
