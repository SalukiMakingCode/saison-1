// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here


    const source=document.querySelector('#source');
    let image=source.dataset.image;
    document.getElementById("target").innerHTML="<img src="+image+" />";

})();
