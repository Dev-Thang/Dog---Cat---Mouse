var Mouse = require('./Mouse.js');
var Cat = require('./Cat.js');
var Dog = require('Dog.js');

var jerry = new Mouse();
var tom = new Cat();
var pitbull = new Dog();

tom.eat(jerry);
pitbull.eat(tom);
console.log(pitbull);