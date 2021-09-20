// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let i = Number(1);
        let arr = [];
        let randomNumber = 0;
        let minimum=101;
        let maximum=0;
        let total=0;
        while (i < 11) {
            randomNumber = Math.floor(Math.random() * 100)+1;
            document.getElementById("n-" + i).innerHTML = randomNumber;
            i++;
            arr.push(randomNumber);
            if (randomNumber<minimum) minimum=randomNumber;
            if (randomNumber>maximum) maximum=randomNumber;
            total=total+randomNumber;
        }
        let average=total/10;
        document.getElementById("min").innerHTML = minimum;
        document.getElementById("max").innerHTML = maximum;
        document.getElementById("sum").innerHTML = total;
        document.getElementById("average").innerHTML = average;





    })
})();
