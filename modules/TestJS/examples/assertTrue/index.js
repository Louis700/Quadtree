'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertTrue(true); // No error
	asserter.assertTrue(false); // throws error
	asserter.assertTrue(false, 'The value is false.'); // Customized message
}
