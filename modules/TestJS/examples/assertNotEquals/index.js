'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertNotEquals(2, 1); // No error
	asserter.assertNotEquals('2', 1); // No error
	asserter.assertNotEquals(1, 1); // throw error
	asserter.assertNotEquals('1', 1, 'Equal.'); // Customized message
}
