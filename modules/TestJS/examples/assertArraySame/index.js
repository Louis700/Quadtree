'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertArraySame([1, 2, 3, 4], [1, 2, 3, 4]); // No error
	asserter.assertArraySame([1, 2, 3, 4], [1, 2, 3]); // throw error
	asserter.assertArraySame([1, 2, 3, 4], [1, 3, 2, 4]); // throw error
	asserter.assertArraySame([1, 2, 3, 4], [1, 2, '3', 4], 'Not the same.'); // Customized message
}
