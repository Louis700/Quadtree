"use strict";

class Vector {
	constructor(x=0, y=0) {
		this.x = x;
		this.y = y;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		
		return this;
	}

	substract(v) {
		this.x -= v.x;
		this.y -= v.y;

		return this;
	}

	multiply(value) {
		this.x *= value;
		this.x *= value;	

		return this;
	}

	divide(value) {
		this.x /= value;
		this.y /= value;

		return this;
	}

	copy() {
		return new Vector(this.x, this.y);
	}

	static add(v, w) {
		return new Vector( (v.x + w.x),
				   (v.y + v.y) );
	}

	static substract(v, w) {
		return new Vector( (v.x - w.x), 
				   (v.y - w.y) );
	}

	static multiply(v, value) {
		return new Vector(v.x*value, v.y*value);
	}

	static divide(v, value) {
		return new Vector(v.x/value, v.y/value);
	}
}
