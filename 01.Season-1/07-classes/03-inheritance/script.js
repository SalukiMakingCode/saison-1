// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Dog extends Animal {
        static greeting="Wouaf";
        constructor(name) {
            super();
            this.name=name;
        }
    }

    class Cat extends Animal {
        static greeting="Miaouw";
        constructor(name) {
            super();
            this.name=name;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
      let dog1 = new Dog("Médor");
      let cat1 = new Cat("Kitty");
      console.log(dog1.sayHello());
      console.log(cat1.sayHello());
    })

})();
