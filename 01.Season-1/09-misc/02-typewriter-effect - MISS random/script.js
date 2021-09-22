// 09-misc/02-typewriter-effect - MISS random/script.js - 9.2: typewriter effect


(() => {

    // your code here

    let arr=document.getElementById("target").textContent.split("");
    console.log(arr);

    document.getElementById("target").innerHTML="";
    let i=0;
    let gogo=setInterval(function(){
        document.getElementById("target").innerHTML=document.getElementById("target").textContent+arr[i];
        i++;
        if (i===arr.length) {clearInterval(gogo);}
    }, Math.floor(Math.random()*1000));

})();
