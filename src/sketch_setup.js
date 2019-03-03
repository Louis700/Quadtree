'use strict';

let mouseRectangle;
let rectangle;

function setup() {
	mouseRectangle = new Rectangle(new Vector(-500, -500), new Vector(width/4, height/4));
	rectangle = new Rectangle(new Vector(width/2, height/2), new Vector(width/4, height/4));
	
	canvas.addEventListener('mousemove', moveListener);
}

function moveListener(evt) {
	let rect = evt.target.getBoundingClientRect();

	mouseRectangle.position = new Vector(evt.clientX - rect.left, evt.clientY - rect.top);
}

