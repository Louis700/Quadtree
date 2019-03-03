'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertNull(null); // No error
	asserter.assertNull(1); // throw error
	asserter.assertNull(3, 'Not null.'); // Customized message
}
