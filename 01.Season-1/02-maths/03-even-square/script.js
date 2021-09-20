
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num=Number(1);
        let toPrint="";
        while (num<22) {
            toPrint=toPrint+num+"² = "+Math.pow(num,2)+"\r\n";
            num++;
        }
    alert (toPrint);
    });

})();
