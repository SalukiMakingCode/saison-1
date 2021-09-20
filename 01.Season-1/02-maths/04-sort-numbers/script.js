// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let elem = document.getElementById("numbers").value;
        let arrayToSort = elem.split (", ");
        let i=Number(0);
        for (elem of arrayToSort) {
            arrayToSort[i]=Number(arrayToSort[i]);
            i++;
        }
        let sortIsFinish = false;
        let stockTemporary=0;
        function sortMe(arr) {
            while (!sortIsFinish) {
                sortIsFinish = true;
                for (i = 1; i < arr.length; i++) {
                    if (arr[i - 1] > arr[i]) {
                        sortIsFinish = false;
                        stockTemporary = arr[i - 1];
                        arr[i - 1] = arr[i];
                        arr[i] = stockTemporary;
                    }
                }
            }
            return arr;
        }

        alert(sortMe(arrayToSort));





    });

})();
