function Dog() {
	this.stomach = [];
}

Dog.prototype.die = function(){
	this.dead = true;
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
	cat.die();
}

module.exports = Dog;