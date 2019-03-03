'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 3]); // No error
	asserter.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 4, 3]); // No error
	asserter.assertArrayNotEquals(['1', 2, '3', 4], [1, 2, 4, 3]); // No error
	asserter.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 3, 4]); // throw error
	asserter.assertArrayNotEquals([1, 2, 3, 4], [1, '2', 3, 4], 'Equal.'); // Customized message
}
