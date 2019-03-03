'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertUndefined(undefined); // No error
	asserter.assertUndefined(1); // throw error
	asserter.assertUndefined(3, 'Not undefined.'); // Customized message
}
