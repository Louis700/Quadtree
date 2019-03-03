'use strict';

class QuadTree {
	constructor(boundary, capacity) {
		this.boundary = boundary;
		this.capacity = capacity;
		this.particles = [];
		this.isSubdivided = false;
	}
}
