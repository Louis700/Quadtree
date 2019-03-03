'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertFalse(false); // No error
	asserter.assertFalse(true); // throw error
	asserter.assertFalse(true, 'The value is true.'); // Customized message
}
