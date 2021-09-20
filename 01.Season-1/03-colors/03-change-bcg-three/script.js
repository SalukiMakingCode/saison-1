
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        document.body.style.backgroundColor = random_hex_color_code();
    })
})();
