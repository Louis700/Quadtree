'use strict';

window.onload = function () {
	let asserter = new Asserter(insertInGreenDiv, insertInRedDiv); // variadic constructor

	asserter.assertTrue(false);
}

function insertInGreenDiv(message) {
	insertIn(message, document.getElementById('greenDiv'));
} 

function insertInRedDiv(message) {
	insertIn(message, document.getElementById('redDiv'));
}

function insertIn(message, element) {
	element.insertAdjacentText('beforeend', message);
}

