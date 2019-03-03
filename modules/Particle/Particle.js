'use strict';

class Particle {
	constructor(position, velocity) {
		this.position = position;
		this.velocity = velocity;
		this.radius = 3;
		this.isCollidingParticle;

		this.collider = new ParticleCollider(this);
		this.updater = new ParticleUpdater(this, this.collider);
		this.drawer = new ParticleDrawer(this);
	}

	update() {
		this.updater.update();
	}

	draw(color=new Color(255)) {
		this.drawer.draw(color);
	}

	collideParticle(particle) {
		if(this.collider.detector.isCollidingParticle(particle))
			this.isCollidingParticle = true;
	}
}
