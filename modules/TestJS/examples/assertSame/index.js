'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertSame(1, 1); // No error
	asserter.assertSame('1', '1'); // No error
	asserter.assertSame('1', 1); // throw error
	asserter.assertSame(1, 2, 'Not the same.'); // Customized message
}
