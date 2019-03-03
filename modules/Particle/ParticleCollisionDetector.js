'use strict';

class ParticleCollisionDetector {
	constructor(particle) {
		this.particle = particle;
	}

	isCollidingParticle(particle) {
		return Vector.sqrtDist(this.particle.position, particle.position) <= (this.particle.radius + particle.radius)**2;
	}

	isLeftCollide() {
		return this.particle.position.x <= this.particle.radius;
	}

	isRightCollide() {
		return this.particle.position.x >= width - this.particle.radius;
	}

	isTopCollide() {
		return this.particle.position.y <= this.particle.radius;
	}

	isDownCollide() {
		return this.particle.position.y >= height - this.particle.radius;
	}
}

