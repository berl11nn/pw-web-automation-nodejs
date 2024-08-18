class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let teo = new Person("Teo", 18);
console.log(teo);


teo.name = "Ti";
console.log(teo.name);


// 1. Init property values when creating an object -> constructor
// 2. Setter(s) - còn gọi là methods: Set value for property
// 3. Getter(s): Get value for property