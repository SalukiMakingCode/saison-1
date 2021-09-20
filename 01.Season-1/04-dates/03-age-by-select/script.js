
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        dobDay=document.getElementById("dob-day").value;
        dobMonth=document.getElementById("dob-month").value;
        dobYear=document.getElementById("dob-year").value;
        let d=new Date();
        let day=d.getDate();
        let month=d.getMonth()+1;
        let year=d.getFullYear();

        let age=year-dobYear;
        if (dobMonth>month || (dobMonth===month && dobDay<day)) age--;

        alert (age);
    })
})();
