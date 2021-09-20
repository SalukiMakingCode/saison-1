// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
      let length=birds.length;
      let size=adjectives.size;
      let randomBird=Math.floor(Math.random()*length);
      let randomAdj=Math.floor(Math.random()*size);
        let adj="";
        let i=0;
        for (let elem of adjectives) {
            if (i===randomAdj) adj=elem;
            i++;
        }
      let selectBird=birds[randomBird];
      let nameBird=selectBird.name;
      let isBirdFem=selectBird.fem;
      let article="";
      if (isBirdFem) { article="La"; adj=adj+"e"; }
      else { article="Le"; }
      console.log(article+" "+nameBird+" "+adj);
    })


})();
