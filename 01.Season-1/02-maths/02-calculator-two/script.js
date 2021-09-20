
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let one=Number(document.getElementById("op-one").value);
        let two=Number(document.getElementById("op-two").value);
        switch (operation) {
            case "addition" :
                alert (one+two);
                break;
            case "substraction" :
                alert (one-two);
                break;
            case "multiplication" :
                alert (one*two);
                break;
            case "division" :
                alert (one/two);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();