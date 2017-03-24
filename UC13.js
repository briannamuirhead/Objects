function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function() {
        var v = Math.pow(length, 3);
        return v;
    }
    this.density = function() {
        var v = Math.pow(length, 3);
        var d = mass/v;
        return d;
    }
    this.surfacearea = function() {
        var sa = 6 * (length * length);
        return sa;
    }
}

function myPet(name, species, sleepy, hunger, awake) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.awake = awake;
    this.speak = speak;
}

function speak() {
    this.hunger = hunger + 1;
    this.sleepy = sleepy + 1;
    if (this.species === "Dog") {
        return "Woof! That means I love you!";
    } else if (this.species === "Cat") {
        return "Ugh. Meow.";
    } else {
        return "";
    }
}
