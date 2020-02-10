function Cat() {
	this.stomach = [];
	this.dead = false;
}

Cat.prototype.die = function()
{
	this.dead = true;
}
Cat.prototype.eat = function(mouse)
{
	this.stomach.push(mouse);
	mouse.die();
}

module.exports = Cat;