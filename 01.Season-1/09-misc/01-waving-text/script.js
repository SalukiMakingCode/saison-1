// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let arr=document.getElementById("target").textContent.split(" ");
    let i=0;
    let newText="";
    for (let elem of arr) {
        newText=newText+" <span id=S"+i+">"+elem+"</span>";
        i++;
    }
    document.getElementById("target").innerHTML=newText;
    i=0;
    for (let elem of arr) {
        Size=16+i*2+"px";
        document.getElementById("S"+i).style.fontSize=Size;
        i++;
    }

})();
