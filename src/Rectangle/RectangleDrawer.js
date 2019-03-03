'use strict';

class RectangleDrawer {
	constructor(rectangle) {
		this.rectangle = rectangle;
	}

	draw() {
		rect( this.rectangle.position.x - this.rectangle.dimensions.x/2, 
		      this.rectangle.position.y - this.rectangle.dimensions.y/2,
		      this.rectangle.dimensions.x, 
		      this.rectangle.dimensions.y );	
	}
}
