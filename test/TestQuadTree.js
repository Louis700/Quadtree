'use strict';

class TestQuadTree {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		this.testEmpty();
		this.testInsert();
	}

	testEmpty() {
		let expectedBoundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(expectedBoundary, 3);

		this.asserter.assertEquals(expectedBoundary, qt.boundary, 'TestEmpty, boundary');
		this.asserter.assertArraySame([], qt.particles, 'TestEmpty, particles');
		this.asserter.assertSame(3, qt.capacity, 'TestEmpty, capacity');
		this.asserter.assertFalse(qt.isSubdivided, 'TestEmpty, isSubdivided');
		this.asserter.assertUndefined(qt.northwest, 'TestEmpty, northwest');
		this.asserter.assertUndefined(qt.northeast, 'TestEmpty, northeast');
		this.asserter.assertUndefined(qt.southwest, 'TestEmpty, southwest');
		this.asserter.assertUndefined(qt.southeast, 'TestEmpty, southeast');
	}

	testInsert() {

	}
}
