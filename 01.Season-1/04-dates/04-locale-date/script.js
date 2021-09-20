
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d=new Date();
    let day=d.getDay();
    let date=d.getDate();
    let month=d.getMonth();
    let year=d.getFullYear();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    switch (day) {
        case 1 :
            day="Monday";
            break;
        case 2 :
            day="Tuesday";
            break;
        case 3 :
            day="Wednesday";
            break;
        case 4 :
            day="Thursday";
            break;
        case 5 :
            day="Friday";
            break;
        case 6 :
            day="Saturday";
            break;
        case 7 :
            day="Sunday";
            break;
    }
    switch (month) {
        case 0 :
            month="January";
            break;
        case 1 :
            month="February";
            break;
        case 2 :
            month="Mars";
            break;
        case 3 :
            month="April";
            break;
        case 4 :
            month="May";
            break;
        case 5 :
            month="June";
            break;
        case 6 :
            month="July";
            break;
        case 7 :
            month="Augustus";
            break;
        case 8 :
            month="September";
            break;
        case 9 :
            month="October";
            break;
        case 10 :
            month="November";
            break;
        case 11 :
            month="December";
            break;
    }

    document.getElementById("target").innerHTML = day+" "+date+" "+month+" "+year+", "+hours+"h"+minutes;

    })();