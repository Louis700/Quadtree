'use strict';

class QuadTreeSubdivider {
	constructor(quadTree) {
		this.quadTree = quadTree;
		this.calculator = new QuadTreeSubdivisionCalculator(quadTree);
	}

	subdivide() {
		this.createNorthwest();
		this.createNortheast();
		this.createSouthwest();
		this.createSoutheast();

		this.quadTree.isSubdivided = true;
	}

	createNorthwest() {
		let boundary = new Rectangle(this.calculator.getNorthwestPosition(), this.calculator.getSubdivisionDimensions());
		this.quadTree.northwest = new QuadTree(boundary, this.quadTree.capacity);
	}

	createNortheast() {
		let boundary = new Rectangle(this.calculator.getNortheastPosition(), this.calculator.getSubdivisionDimensions());
		this.quadTree.northeast = new QuadTree(boundary, this.quadTree.capacity);
	}

	createSouthwest() {
		let boundary = new Rectangle(this.calculator.getSouthwestPosition(), this.calculator.getSubdivisionDimensions());
		this.quadTree.southwest = new QuadTree(boundary, this.quadTree.capacity);
	}
	
	createSoutheast() {
		let boundary = new Rectangle(this.calculator.getSoutheastPosition(), this.calculator.getSubdivisionDimensions());
		this.quadTree.southeast = new QuadTree(boundary, this.quadTree.capacity);
	}
}
