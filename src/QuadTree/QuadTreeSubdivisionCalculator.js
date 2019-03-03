'use strict';

class QuadTreeSubdivisionCalculator {
	constructor(quadTree) {
		this.quadTree = quadTree;
	}

	getNorthwestPosition() {
		let dimensions = this.getSubdivisionDimensions();
		return new Vector(this.quadTree.boundary.position.x - dimensions.x/2, this.quadTree.boundary.position.y - dimensions.y/2);
	}

	getNortheastPosition() {
		let dimensions = this.getSubdivisionDimensions();
		return new Vector(this.quadTree.boundary.position.x + dimensions.x/2, this.quadTree.boundary.position.y - dimensions.y/2);
	}
	
	getSouthwestPosition() {
		let dimensions = this.getSubdivisionDimensions();
		return new Vector(this.quadTree.boundary.position.x - dimensions.x/2, this.quadTree.boundary.position.y + dimensions.y/2);
	}

	getSoutheastPosition() {
		let dimensions = this.getSubdivisionDimensions();
		return new Vector(this.quadTree.boundary.position.x + dimensions.x/2, this.quadTree.boundary.position.y + dimensions.y/2);
	}

	getSubdivisionDimensions() {
		return new Vector(this.quadTree.boundary.dimensions.x/2, this.quadTree.boundary.dimensions.y/2);	
	}
}
