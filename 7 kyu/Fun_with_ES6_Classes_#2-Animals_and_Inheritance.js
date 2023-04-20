class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = 0;
        this.species = 'shark';
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = 4;
        this.species = 'cat';
    }
    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, status);
        this.name = name;
        this.age = age;
        this.status = status;
        this.legs = 4;
        this.species = 'dog';
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}