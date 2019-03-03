'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertArrayEquals([1, 2, 3, 4], [1, 2, 3, 4]); // No error
	asserter.assertArrayEquals(['1', 2, '3', 4], [1, 2, 3, 4]); // No error
	asserter.assertArrayEquals([1, 2, 3, 4], [1, 2, 3]); // throw error
	asserter.assertArrayEquals([1, 2, 3, 4], [1, 2, 4, 3]); // throw error
	asserter.assertArrayEquals([1, 2, 3, 4], [1, '3', 2, 5], 'Not equal.'); // Customized message
}
