function Dog() {
	this.stomach = [];
	this.dead = false;
}

Dog.prototype.die = function(){
	this.dead = true;
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}

module exports = Dog;