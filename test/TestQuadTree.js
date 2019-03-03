'use strict';

class TestQuadTree {
	constructor() {
		this.asserter = new Asserter();
	}

	test() { this.testEmpty();
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

	testSubdivide() {
		this.testSubdivide1();
		this.testSubdivide2();
	}

	testInsert() {
		this.testInsertOne();
		this.testInsertThree();
		this.testInsertFour();
	}

	testSubdivide1() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);

		qt.subdivide();

		let expectedNorthwest = new QuadTree(new Rectangle(new Vector(50, 50), new Vector(100, 100)), 3);
		let expectedNortheast = new QuadTree(new Rectangle(new Vector(150, 50), new Vector(100, 100)), 3);
		let expectedSouthwest = new QuadTree(new Rectangle(new Vector(50, 150), new Vector(100, 100)), 3);
		let expectedSoutheast = new QuadTree(new Rectangle(new Vector(150, 150), new Vector(100, 100)), 3);

		this.asserter.assertTrue(qt.isSubdivided, 'TestSubdivide1, isSubdivided');

		this.assertSubdivision(expectedNorthwest, qt.northwest, 'TestSubdivide1', 'northwest');
		this.assertSubdivision(expectedNortheast, qt.northwest, 'TestSubdivide1', 'northeast');
		this.assertSubdivision(expectedSouthwest, qt.northwest, 'TestSubdivide1', 'southwest');
		this.assertSubdivision(expectedSoutheast, qt.northwest, 'TestSubdivide1', 'southeast');
	}
	
	testSubdivide2() {
		let boundary = new Rectangle(new Vector(400, 400), new Vector(50, 50));
		let qt = new QuadTree(boundary, 3);

		qt.subdivide();

		let expectedNorthwest = new QuadTree(new Rectangle(new Vector(387.5, 387.5), new Vector(25, 25)), 3);
		let expectedNortheast = new QuadTree(new Rectangle(new Vector(412.5, 387.5), new Vector(25, 25)), 3);
		let expectedSouthwest = new QuadTree(new Rectangle(new Vector(387.5, 412.5), new Vector(25, 25)), 3);
		let expectedSoutheast = new QuadTree(new Rectangle(new Vector(387.5, 387.5), new Vector(25, 25)), 3);

		this.asserter.assertTrue(qt.isSubdivided, 'TestSubdivide2, isSubdivided');

		this.assertSubdivision(expectedNorthwest, qt.northwest, 'TestSubdivide1', 'northwest');
		this.assertSubdivision(expectedNortheast, qt.northwest, 'TestSubdivide1', 'northeast');
		this.assertSubdivision(expectedSouthwest, qt.northwest, 'TestSubdivide1', 'southwest');
		this.assertSubdivision(expectedSoutheast, qt.northwest, 'TestSubdivide1', 'southeast');
	}

	testInsertOne() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);

		let particle = new Particle(new Vector(), new Vector());	

		qt.insert(particle);
		
		this.asserter.assertArraySame([particle], qt.particles, 'TestInsertOne, particles');
		this.asserter.assertFalse(qt.isSubdivided, 'TestInsertOne, isSubdivided');
		this.asserter.assertUndefined(qt.northwest, 'TestInsertOne, northwest');
		this.asserter.assertUndefined(qt.northeast, 'TestInsertOne, northeast');
		this.asserter.assertUndefined(qt.southwest, 'TestInsertOne, southwest');
		this.asserter.assertUndefined(qt.southeast, 'TestInsertOne, southeast');
	}

	testInsertThree() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);

		let particle1 = new Particle(new Vector(), new Vector());	
		let particle2 = new Particle(new Vector(), new Vector());
		let particle3 = new Particle(new Vector(), new Vector());

		qt.insert(particle1);
		qt.insert(particle2);
		qt.insert(particle3);
		
		this.asserter.assertArraySame(qt.particles, [particle1, particle2, particle3], 'TestInsertThree, particles');
		this.asserter.assertFalse(qt.isSubdivided, 'TestInsertThree, isSubdivided');
		this.asserter.assertUndefined(qt.northwest, 'TestInsertThree, northwest');
		this.asserter.assertUndefined(qt.northeast, 'TestInsertThree, northeast');
		this.asserter.assertUndefined(qt.southwest, 'TestInsertThree, southwest');
		this.asserter.assertUndefined(qt.southeast, 'TestInsertThree, southeast');
	}
	
	testInsertFour() {
		this.testInsertFourNorthwest();
		this.testInsertFourNortheast();
		this.testInsertFourSouthwest();
		this.testInsertFourSoutheast();
	}

	assertSubdivision(expected, actual, section, name) {
		this.asserter.assertSame(expected.boundary.position.x, actual.boundary.position.x, `${section}, ${name}.boundary.position.x`);
		this.asserter.assertSame(expected.boundary.position.y, actual.boundary.position.y, `${section}, ${name}.boundary.position.y`);
		this.asserter.assertSame(expected.boundary.dimensions.x, actual.boundary.dimensions.x, `${section}, ${name}.boundary.dimensions.x`);
		this.asserter.assertSame(expected.boundary.dimensions.y, actual.boundary.dimensions.y, `${section}, ${name}.boundary.dimensions.y`);
		this.asserter.assertSame(expected.capacity, actual.capacity, `${section}, ${name}.capacity`);
		this.asserter.assertArraySame(expected.particles, actual.particles, `${section}, ${name}.particles`);
	}

	testInsertFourNorthwest() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);
		let particles = [];

		for(let i = 0; i < 4; i++) {
			particles.push(new Particle(new Vector(20, 20), new Vector()));
			qt.insert(particles[i]);
		}

		this.asserter.assertArraySame(qt.particles, [particles[0], particles[1], particles[2]], 'TestInsertFourNorthwest, particles');
		this.asserter.assertTrue(qt.isSubdivided, 'TestInsertFourNorthwest, isSubdivided');

		this.asserter.assertArraySame(qt.northwest.particles, [particles[3]]);
		this.asserter.assertArraySame(qt.northeast.particles, []);
		this.asserter.assertArraySame(qt.southwest.particles, []);
		this.asserter.assertArraySame(qt.southeast.particles, []);
	}

	testInsertFourNortheast() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);
		let particles = [];

		for(let i = 0; i < 4; i++) {
			particles.push(new Particle(new Vector(150, 20), new Vector()));
			qt.insert(particles[i]);
		}

		this.asserter.assertArraySame(qt.particles, [particles[0], particles[1], particles[2]], 'TestInsertFourNortheast, particles');
		this.asserter.assertTrue(qt.isSubdivided, 'TestInsertFourNortheast, isSubdivided');

		this.asserter.assertArraySame(qt.northwest.particles, []);
		this.asserter.assertArraySame(qt.northeast.particles, [particles[3]]);
		this.asserter.assertArraySame(qt.southwest.particles, []);
		this.asserter.assertArraySame(qt.southeast.particles, []);
	}
	
	testInsertFourSouthwest() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);
		let particles = [];

		for(let i = 0; i < 4; i++) {
			particles.push(new Particle(new Vector(20, 150), new Vector()));
			qt.insert(particles[i]);
		}

		this.asserter.assertArraySame(qt.particles, [particles[0], particles[1], particles[2]], 'TestInsertFourSouthwest, particles');
		this.asserter.assertTrue(qt.isSubdivided, 'TestInsertFourSouthwest, isSubdivided');

		this.asserter.assertArraySame(qt.northwest.particles, []);
		this.asserter.assertArraySame(qt.northeast.particles, []);
		this.asserter.assertArraySame(qt.southwest.particles, [particles[3]]);
		this.asserter.assertArraySame(qt.southeast.particles, []);
	}

	testInsertFourSoutheast() {
		let boundary = new Rectangle(new Vector(100, 100), new Vector(200, 200));
		let qt = new QuadTree(boundary, 3);
		let particles = [];

		for(let i = 0; i < 4; i++) {
			particles.push(new Particle(new Vector(150, 150), new Vector()));
			qt.insert(particles[i]);
		}

		this.asserter.assertArraySame(qt.particles, [particles[0], particles[1], particles[2]], 'TestInsertFourSoutheast, particles');
		this.asserter.assertTrue(qt.isSubdivided, 'TestInsertFourSoutheast, isSubdivided');

		this.asserter.assertArraySame(qt.northwest.particles, []);
		this.asserter.assertArraySame(qt.northeast.particles, []);
		this.asserter.assertArraySame(qt.southwest.particles, []);
		this.asserter.assertArraySame(qt.southeast.particles, [particles[3]]);
	}
}

