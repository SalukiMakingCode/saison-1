
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    let month = [];
    let counter = 0;
    Date.prototype.addDays = function (num) {
        var value = this.valueOf();
        value += 86400000 * num;
        return new Date(value);
    }
    document.getElementById('run').addEventListener('click', function(){
        let year = document.getElementById('year').value;
        let startDate = new Date(year,00,1);
        let endDate = new Date(year,11,31);
        month = [];
        while(startDate <= endDate) {
            if(startDate.getDay() === 5 && startDate.getDate() === 13) {
                counter++;
                month.push(startDate.getMonth()+1);
            }
            startDate = startDate.addDays(1);
        }
        for (let i=0; i<month.length;i++) {
            if (month[i]===1) month[i]="janvier";
            if (month[i]===2) month[i]="février";
            if (month[i]===3) month[i]="mars";
            if (month[i]===4) month[i]="avril";
            if (month[i]===5) month[i]="mai";
            if (month[i]===6) month[i]="juin";
            if (month[i]===7) month[i]="juillet";
            if (month[i]===8) month[i]="aout";
            if (month[i]===9) month[i]="septembre";
            if (month[i]===10) month[i]="octobre";
            if (month[i]===11) month[i]="novembre";
            if (month[i]===12) month[i]="décembre";
        }
        alert(month);
    });
})();
