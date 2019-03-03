'use strict';

window.onload = function () {
	let testRectangle = new TestRectangle();
	let testQuadTree = new TestQuadTree();

	console.log('Testing...');
	testRectangle.test();
	testQuadTree.test();
	console.log('Tests are finished!');
}

