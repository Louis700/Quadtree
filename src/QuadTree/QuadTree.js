'use strict';

class QuadTree {
	constructor(boundary, capacity) {
		this.boundary = boundary;
		this.capacity = capacity;
		this.particles = [];
		this.isSubdivided = false;

		this.subdivider = new QuadTreeSubdivider(this);
		this.inserter = new QuadTreeInserter(this);
	}

	insert(particle) {
		this.inserter.insert(particle);
	}

	subdivide() {
		this.subdivider.subdivide();
	}

}
