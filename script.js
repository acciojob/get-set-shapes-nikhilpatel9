//complete this code
class Rectangle {
	constructor(width,hight){
		this.width=width;
		this.hight=hight;
	}
	getArea(){
		return this.width*this.hight;
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side=side;
	}
	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
