'use strict';

class RectangleCollider {
	constructor(rectangle) {
		this.rectangle = rectangle;
	}

	contains(position) {
		return this.containsX(position.x) &&
		       this.containsY(position.y);	
	}
	
	intersects(rectangle) {
		return this.intersectsX(rectangle.position.x - rectangle.dimensions.x/2, rectangle.position.x + rectangle.dimensions.x/2) &&
		       this.intersectsY(rectangle.position.y - rectangle.dimensions.y/2, rectangle.position.y + rectangle.dimensions.y/2);
	}
	
	containsX(x) {
		return (x >= this.rectangle.position.x - this.rectangle.dimensions.x/2) &&
		       (x <= this.rectangle.position.x + this.rectangle.dimensions.x/2);
	}

	containsY(y) {
		return (y >= this.rectangle.position.y - this.rectangle.dimensions.y/2) &&
		       (y <= this.rectangle.position.y + this.rectangle.dimensions.y/2);
	}

	intersectsX(bound1, bound2) {
		let min = Math.min(bound1, bound2);
		let max = Math.max(bound1, bound2);

		return (max >= this.rectangle.position.x - this.rectangle.dimensions.x/2) &&
		       (min <= this.rectangle.position.x + this.rectangle.dimensions.x/2);
	}

	intersectsY(bound1, bound2) {
		let min = Math.min(bound1, bound2);
		let max = Math.max(bound1, bound2);

		return (max >= this.rectangle.position.y - this.rectangle.dimensions.y/2) &&
		       (min <= this.rectangle.position.y + this.rectangle.dimensions.y/2);
	}
}
