
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num=Number(document.getElementById("number").value);
        let calc=1;
        while (num>0) {
            if (num>0) { calc=calc*num; }
            num--;
        }
        alert(calc);
    });

})();
