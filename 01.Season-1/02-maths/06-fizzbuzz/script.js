
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let num=Number(1);
    toPrint="";
    while (num<101) {
        if (num%3===0 && num%5===0) toPrint=toPrint+" fizzbuzz";
        else if (num%3===0) toPrint=toPrint+" fizz";
        else if (num%5===0) toPrint=toPrint+" buzz";
        else toPrint=toPrint+" "+num;
        num++;
    }
   console.log(toPrint);
})();