'use strict';

window.onload = function () {
	let asserter = new Asserter();

	asserter.assertArrayNotSame([1, 2, 3, 4], [1, 2, 3]); // No error
	asserter.assertArrayNotSame([1, 2, 3, 4], [1, 2, 4, 3]); // No error
	asserter.assertArrayNotSame([1, 2, 3, 4], [1, 2, '4', 3]); // No error
	asserter.assertArrayNotSame([1, 2, 3, 4], [1, 2, 3, 4]); // throw error
	asserter.assertArrayNotSame([5, 4, 3, 2, 1], [5, 4, 3, 2, 1], 'The same.'); // Customized message
}
