
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let confirmed=false;
    while (!confirmed) {
        let age=prompt("what's your age ?");
        let gender=prompt("What's your gender ? (Men/Women)");
        let town = prompt("What's your city ?");
        let response = prompt ("You are "+age+" years old, you are a "+gender+" and you live in "+town+". Does it correct ? (yes/no)")
        if (response==="yes") confirmed=true;
    }

})();
