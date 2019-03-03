'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertNotNull(1); // No error
	asserter.assertNotNull(null); // throw error
	asserter.assertNotNull(null, 'Null.'); // Customized message
}
