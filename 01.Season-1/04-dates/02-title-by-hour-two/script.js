
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    let hours = d.getHours();
    let minute = d.getMinutes();
    if (hours<17) {
        document.getElementById("target").innerHTML = "Hello";
    }
    else if (hours>17) {
        document.getElementById("target").innerHTML = "Good evening";
    }
    else if (minute<30) {
        document.getElementById("target").innerHTML = "Hello";
    }
    else {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
