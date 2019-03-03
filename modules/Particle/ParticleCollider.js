'use strict';

class ParticleCollider {
	constructor(particle) {
		this.particle = particle;
		this.detector = new ParticleCollisionDetector(particle);
	}

	applySideCollisions() {
		this.applyVerticalSideCollisions();	
		this.applyHorizontalSideCollisions();
	}

	applyVerticalSideCollisions() {
		if(this.detector.isLeftCollide())
			this.applyCollisionLeft();
		else if(this.detector.isRightCollide())
			this.applyCollisionRight();
	}

	applyHorizontalSideCollisions() {
		if(this.detector.isTopCollide()) 
			this.applyCollisionTop();
		else if(this.detector.isDownCollide())
			this.applyCollisionDown();
	}

	applyCollisionLeft() {
		this.particle.position.x = this.particle.radius;
		this.particle.velocity.x *= -1;
	}

	applyCollisionRight() {
		this.particle.position.x = width - this.particle.radius;
		this.particle.velocity.x *= -1;
	}
	
	applyCollisionTop() {
		this.particle.position.y = this.particle.radius;
		this.particle.velocity.y *= -1;
	}

	applyCollisionDown() {
		this.particle.position.y = height - this.particle.radius;
		this.particle.velocity.y *= -1;
	}
}
