'use strict';

class QuadTreeSubdivider {
	constructor(quadTree) {
		this.quadTree = quadTree;
	}

	subdivide() {
		this.createNorthwest();
		this.createNortheast();
		this.createSouthwest();
		this.createSoutheast();
	}

	createNorthwest() {
		let boundary = new Rectangle(new Vector(50, 50), new Vector(100, 100));
		this.quadTree.northwest = new QuadTree(boundary, this.quadTree.capacity);
	}

	createNortheast() {
		let boundary = new Rectangle(new Vector(150, 50), new Vector(100, 100));
		this.quadTree.northeast = new QuadTree(boundary, this.quadTree.capacity);
	}

	createSouthwest() {
		let boundary = new Rectangle(new Vector(50, 150), new Vector(100, 100));
		this.quadTree.southwest = new QuadTree(boundary, this.quadTree.capacity);
	}
	
	createSoutheast() {
		let boundary = new Rectangle(new Vector(150, 150), new Vector(100, 100));
		this.quadTree.southeast = new QuadTree(boundary, this.quadTree.capacity);
	}
}
