'uses strict';

class QuadTreeInserter {
	constructor(quadTree) {
		this.quadTree = quadTree;
	}

	insert(particle) {
		if(this.quadTree.particles.length < this.quadTree.capacity) {
			this.quadTree.particles.push(particle);	
			return;
		}
	
		this.quadTree.subdivide();	

		if(particle.position.x <= this.quadTree.boundary.position.x && particle.position.y <= this.quadTree.boundary.position.y)
			this.quadTree.northwest.insert(particle);
		else if(particle.position.x >= this.quadTree.boundary.position.x && particle.position.y <= this.quadTree.boundary.position.y)
			this.quadTree.northeast.insert(particle);
		else if(particle.position.x <= this.quadTree.boundary.position.x && particle.position.y >= this.quadTree.boundary.position.y)
			this.quadTree.southwest.insert(particle);
		else
			this.quadTree.southeast.insert(particle);
		
		this.quadTree.isSubdivided = true;
	}
}
