// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname=firstname;
            this.lastname=lastname;
        }
        get name() {
            return this.firstname+" "+this.lastname;
        }
        set name(fullName) {
            this.firstname=fullName.split(" ")[0];
            this.lastname=fullName.split(" ")[1];
        }
    }

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let me = new Person("David", "Van Goidtsnoven");
        console.log(me.name);
        me.name="Robert Legrand";
        console.log(me.name);
    })


})();
