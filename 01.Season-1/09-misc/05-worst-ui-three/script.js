// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    document.getElementById("target").textContent="+0460000000";
    function updateTarget (position, valeur) {
        let source=document.getElementById("target").textContent.split('');
        const valeu = JSON.stringify(valeur);
        let vale="";
        if (position===1) vale=valeu[8]+valeu[9]+valeu[10];
        else if (valeu[12]==="}") vale=valeu[9]+valeu[10];
        else vale=valeu[8]+valeu[9];
        let splitValeur=vale.split('');
        let i=0;
        let newText="";
        for (let elem of source) {
            if (i===0) newText=newText+"+";
            if (i===1) newText=newText+"0";
            if (i===2 && position===1) newText=newText+splitValeur[0];
            else if (i===2) newText=newText+source[i];
            if (i===3 && position===1) newText=newText+splitValeur[1];
            else if (i===3) newText=newText+source[i];
            if (i===4 && position===1) newText=newText+splitValeur[2];
            else if (i===4) newText=newText+source[i];
            if (i===5 && position===2) newText=newText+splitValeur[0];
            else if (i===5) newText=newText+source[i];
            if (i===6 && position===2) newText=newText+splitValeur[1];
            else if (i===6) newText=newText+source[i];
            if (i===7 && position===3) newText=newText+splitValeur[0];
            else if (i===7) newText=newText+source[i];
            if (i===8 && position===3) newText=newText+splitValeur[1];
            else if (i===8) newText=newText+source[i];
            if (i===9 && position===4) newText=newText+splitValeur[0];
            else if (i===9) newText=newText+source[i];
            if (i===10 && position===4) newText=newText+splitValeur[1];
            else if (i===10) newText=newText+source[i];
            i++;
        }
        document.getElementById("target").textContent=newText;
    }

    document.getElementById("fix-part-one").addEventListener("click", ()=>{
        let look= document.querySelector("#part-one");
        let min=look.dataset.min;
        let max=look.dataset.max;
        let dif=max-min;
        let calc=Number(min)+(Math.floor(Math.random()*dif));
        document.getElementById("part-one").value=calc;
        updateTarget (1, {calc});
    })

    document.getElementById("fix-part-two").addEventListener("click", ()=>{
        let look= document.querySelector("#part-two");
        let min=look.dataset.min;
        let max=look.dataset.max;
        let dif=max-min;
        let calc=Number(min)+(Math.floor(Math.random()*dif));
        if (calc<10) calc="0"+calc;
        document.getElementById("part-two").value=calc;
        updateTarget (2, {calc});
    })

    document.getElementById("fix-part-three").addEventListener("click", ()=>{
        let look= document.querySelector("#part-three");
        let min=look.dataset.min;
        let max=look.dataset.max;
        let dif=max-min;
        let calc=Number(min)+(Math.floor(Math.random()*dif));
        if (calc<10) calc="0"+calc;
        document.getElementById("part-three").value=calc;
        updateTarget (3, {calc});
    })

    document.getElementById("fix-part-four").addEventListener("click", ()=>{
        let look= document.querySelector("#part-four");
        let min=look.dataset.min;
        let max=look.dataset.max;
        let dif=max-min;
        let calc=Number(min)+(Math.floor(Math.random()*dif));
        if (calc<10) calc="0"+calc;
        document.getElementById("part-four").value=calc;
        updateTarget (4, {calc});
    })

})();
