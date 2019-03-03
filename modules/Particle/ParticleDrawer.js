'use strict';

class ParticleDrawer {
	constructor(particle) {
		this.particle = particle;
	}

	draw(color=new Color(255)) {
		noStroke();

		fill(color);

		circle(this.particle.position.x, this.particle.position.y, this.particle.radius);
	}
}
