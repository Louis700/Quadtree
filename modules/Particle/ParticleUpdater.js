'use strict';

class ParticleUpdater {
	constructor(particle, collider) {
		this.particle = particle;
		this.collider = collider;
	}

	update() {
		this.particle.isCollidingParticle = false;
		this.particle.position.add(this.particle.velocity);
		this.collider.applySideCollisions();
	}
}
