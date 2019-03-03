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

		this.quadTree.isSubdivided = true;
	}

	createNorthwest() {
		let dimensions = new Vector(this.quadTree.boundary.dimensions.x/2, this.quadTree.boundary.dimensions.y/2);
		let position = new Vector(this.quadTree.boundary.position.x - dimensions.x/2, this.quadTree.boundary.position.y - dimensions.y/2);

		let boundary = new Rectangle(position, dimensions);
		this.quadTree.northwest = new QuadTree(boundary, this.quadTree.capacity);
	}

	createNortheast() {
		let dimensions = new Vector(this.quadTree.boundary.dimensions.x/2, this.quadTree.boundary.dimensions.y/2);
		let position = new Vector(this.quadTree.boundary.position.x + dimensions.x/2, this.quadTree.boundary.position.y - dimensions.y/2);
	
		let boundary = new Rectangle(position, dimensions);
		this.quadTree.northeast = new QuadTree(boundary, this.quadTree.capacity);
	}

	createSouthwest() {
		let dimensions = new Vector(this.quadTree.boundary.dimensions.x/2, this.quadTree.boundary.dimensions.y/2);
		let position = new Vector(this.quadTree.boundary.position.x - dimensions.x/2, this.quadTree.boundary.position.y + dimensions.y/2);
	
		let boundary = new Rectangle(position, dimensions);
		this.quadTree.southwest = new QuadTree(boundary, this.quadTree.capacity);
	}
	
	createSoutheast() {
		let dimensions = new Vector(this.quadTree.boundary.dimensions.x/2, this.quadTree.boundary.dimensions.y/2);
		let position = new Vector(this.quadTree.boundary.position.x + dimensions.x/2, this.quadTree.boundary.position.y + dimensions.y/2);
	
		let boundary = new Rectangle(position, dimensions);
		this.quadTree.southeast = new QuadTree(boundary, this.quadTree.capacity);
	}
}
