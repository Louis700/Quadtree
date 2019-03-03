'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertEquals(1, 1); // No error
	asserter.assertEquals('1', 1); // No error
	asserter.assertEquals(2, 1); // throw error
	asserter.assertEquals('2', 1, 'Not equal.'); // Customized message
}
