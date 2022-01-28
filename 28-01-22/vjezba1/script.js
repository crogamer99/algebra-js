function Dog () {
    this.name = "rex";
}

Dog.prototype.bark = function() {
    console.log("Bark Bark");
};

const dog1 = new Dog();

Dog.prototype.returnName = function() {
    console.log("This dogs name is " + this.name + ".");
};

dog1.returnName(); // This dogs name is rex.