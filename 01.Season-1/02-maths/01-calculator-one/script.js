
// 02-maths/01-calculator-one/script.js - 2.1: calculator1
let total=Number(0);
(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let one=Number(document.getElementById("op-one").value);
        let two=Number(document.getElementById("op-two").value);
        total=one+two;
        alert (total);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let one=Number(document.getElementById("op-one").value);
        let two=Number(document.getElementById("op-two").value);
        total=one-two;
        alert (total);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let one=Number(document.getElementById("op-one").value);
        let two=Number(document.getElementById("op-two").value);
        total=one*two;
        alert (total);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let one=Number(document.getElementById("op-one").value);
        let two=Number(document.getElementById("op-two").value);
        total=one/two;
        alert (total);
    });
})();
