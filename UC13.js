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

function Pet(name, species) {
    this.name = name;
    this.species = species;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = speak;
    this.eat = eat;
    this.nap = nap;
    this.wakeUp = wakeUp;
    this.rollOver = rollOver;
}

function speak() {
    this.hunger = this.hunger + 1;
    this.sleepy = this.sleepy + 1;
    if (this.species === "Dog") {
        return "Woof! That means I love you!";
    } else if (this.species === "Cat") {
        return "Ugh. Meow.";
    } else {
        return "";
    }
}

function eat() {
    this.hunger = 0;
    this.sleepy = this.sleepy + 1;
    if (this.species === "Dog") {
        return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
    } else if (this.species === "Cat") {
        return "Ugh, I guess I'll eat this.";
    } else {
        return "";
    }
}

function nap() {
    this.sleepy = 0;
    this.awake = false;
    return "Zzzz...";
}

function wakeUp() {
    this.hunger = 4;
    this.sleepy = 0;;
    this.awake = true;
    if (this.species === "Dog") {
        return "I'm awake! Let's eat and then play! I love you!";
    } else if (this.species === "Cat") {
        return "Ugh, I'm awake now. Is there anything to eat around here?";
    } else {
        return "";
    }
}

function rollOver() {
    if (this.hunger < 4 && this.sleepy < 5 && this.awake == true && this.species === "Dog") {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Rolling! Now what? I love you!";
    } else if (this.hunger < 4 && this.sleepy < 5 && this.awake == true && this.species === "Cat") {
        this.hunger = this.hunger + 1;
        this.sleepy = this.sleepy + 1;
        return "Ugh. I'm a cat. I only roll over if I want to.";
    } else if (this.species === "Dog" && this.hunger >= 4) {
        return "I'm hungry! Let's eat first. I love you!";
    }
}
