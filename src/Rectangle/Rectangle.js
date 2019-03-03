'use strict'

class Rectangle {
	constructor(position, dimensions) {
		this.position = position;
		this.dimensions = dimensions;

		this.collider = new RectangleCollider(this);
		this.drawer = new RectangleDrawer(this);
	}

	draw() {
		this.drawer.draw();
	}

	contains(position) {
		return this.collider.contains(position);
	}
		
	intersects(rectangle) {
		return this.collider.intersects(rectangle);
	}
}
