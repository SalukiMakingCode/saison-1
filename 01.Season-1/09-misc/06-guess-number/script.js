// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    function Generate() {
        Min = Math.ceil(1);
        Max = Math.ceil(100);
        let N = Math.floor(Math.random() * (Max - Min)) + Min;
        let i=0;
        console.log(N);
        let A = prompt ("Guess the number between 1 and 100! ");
        A = Number(A);
        while (A !== N) {
            if (A < N) {
                alert("your number is lower ");
                A = Number(prompt("  Guess the number again "));
            } else if (A > N) {
                alert("your number is higher ");
                A = Number(prompt("  Guess the number again "));
            }
            i++;
        }
        alert("that's it! you needed "+i+" guesses");
    }
    Generate();

})();
