'use strict';

function loop() {
	background(new Color(52, 52, 52));
	
	lineJoin('round');
	noFill();

	if(rectangle.intersects(mouseRectangle)) {
		stroke(new Color(52, 255, 52));
		strokeWeight(8);
	} else {
		stroke(new Color(255));
		strokeWeight(3);
	}
	rectangle.draw();
	mouseRectangle.draw();

}

