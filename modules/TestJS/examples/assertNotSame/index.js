'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertNotSame(2, 1); // No error
	asserter.assertNotSame(1, '1'); // No error
	asserter.assertNotSame(1, 1); // throw error
	asserter.assertNotSame('1', '1', 'The same.'); // Customized message
}
