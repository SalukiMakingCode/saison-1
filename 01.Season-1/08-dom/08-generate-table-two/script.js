// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    let insideTd="";
    let calc=0;
    for (let i=1; i<11; i++) {
        insideTd=insideTd+"<tr>";
        for (let j=1; j<11; j++) {
            calc=i*j;
            insideTd=insideTd+"<td>"+i+" x "+j+" = "+calc+"</td>";
        }
        insideTd=insideTd+"</tr>";
    }
    document.getElementById("target").innerHTML="<table>"+insideTd+"</table>"

})();
