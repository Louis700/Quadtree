'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertNotUndefined(1); // No error
	asserter.assertNotUndefined(undefined); // throw error
	asserter.assertNotUndefined(undefined, 'Undefined.'); // Customized message
}
