'use strict';

class TestRectangle {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		this.testContains();	
		this.testIntersects();
	}
	
	testContains() {
		this.testTrueContains();
		this.testFalseContains();
	}

	testIntersects() {
		this.testTrueIntersects();
		this.testFalseIntersects();
	}

	testTrueContains() {
		let rectangle = new Rectangle(new Vector(100, 100), new Vector(200, 200));

		this.asserter.assertTrue(rectangle.contains(new Vector(50, 50)), 'testContains, normal');
		this.asserter.assertTrue(rectangle.contains(new Vector(100, 10)), 'testContains, on right limit');
		this.asserter.assertTrue(rectangle.contains(new Vector(0, 10)), 'testContains, on left limit');
		this.asserter.assertTrue(rectangle.contains(new Vector(10, 0)), 'testContains, on top limit');
		this.asserter.assertTrue(rectangle.contains(new Vector(10, 100)), 'testContains, on down limit');
	}

	testFalseContains() {
		let rectangle = new Rectangle(new Vector(100, 100), new Vector(200, 200));

		this.asserter.assertFalse(rectangle.contains(new Vector(-5, 50)), 'testContains, out left');
		this.asserter.assertFalse(rectangle.contains(new Vector(250, 50)), 'testContains, out right');
		this.asserter.assertFalse(rectangle.contains(new Vector(50, -5)), 'testContains, out above');
		this.asserter.assertFalse(rectangle.contains(new Vector(50, 250)), 'testContains, out below');	
	}

	testTrueIntersects() {
		let comparedRectangle = new Rectangle(new Vector(100, 100), new Vector(200, 200));

		let normalRectangle = new Rectangle(new Vector(50, 50), new Vector(20, 20));
		let leftLimitRectangle = new Rectangle(new Vector(-50, 100), new Vector(100, 100));
		let rightLimitRectangle = new Rectangle(new Vector(250, 100), new Vector(100, 100));
		let topLimitRectangle = new Rectangle(new Vector(100, -50), new Vector(100, 100));
		let downLimitRectangle = new Rectangle(new Vector(100, 250), new Vector(100, 100));

		this.asserter.assertTrue(comparedRectangle.intersects(normalRectangle), 'testIntersects, normal');
		this.asserter.assertTrue(comparedRectangle.intersects(leftLimitRectangle), 'testIntersects, limit left');
		this.asserter.assertTrue(comparedRectangle.intersects(rightLimitRectangle), 'testIntersects, limit right');
		this.asserter.assertTrue(comparedRectangle.intersects(topLimitRectangle), 'testIntersects, limit top');
		this.asserter.assertTrue(comparedRectangle.intersects(downLimitRectangle), 'testIntersects, limit down');
	}

	testFalseIntersects() {
		let comparedRectangle = new Rectangle(new Vector(100, 100), new Vector(200, 200));

		let outLeftRectangle = new Rectangle(new Vector(-100, 100), new Vector(10, 10));
		let outRightRectangle = new Rectangle(new Vector(300, 100), new Vector(10, 10));
		let outTopRectangle = new Rectangle(new Vector(100, -100), new Vector(10, 10));
		let outDownRectangle = new Rectangle(new Vector(100, 300), new Vector(10, 10));

		this.asserter.assertFalse(comparedRectangle.intersects(outLeftRectangle), 'testIntersects, out left');
		this.asserter.assertFalse(comparedRectangle.intersects(outRightRectangle), 'testIntersects, out right');
		this.asserter.assertFalse(comparedRectangle.intersects(outTopRectangle), 'testIntersects, out top');
		this.asserter.assertFalse(comparedRectangle.intersects(outDownRectangle), 'testIntersects, out down');
	}
}
