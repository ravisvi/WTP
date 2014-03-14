var canvasWidth = window.screen.availWidth;
var canvasHeight = window.screen.availHeight;
var canvas = 0;
var context = 0;

function initCanvas() {
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function startWords(canvasId) {
	context.font = "175% Helvetica";
	var thisWord = getWord();
	var thisX = Math.random() * canvasWidth;
	var thisY = 0;
	var t = setInterval(function() {
		context.fillText(thisWord, thisX, thisY);
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		thisY += 10;
		context.fillText(thisWord, thisX, thisY);
	}, 100);
}

function getWord() {
	var dummyWords = new Array("this", "is", "sparta", "hello", "world", "joker");
	return dummyWords[Math.floor(Math.random() * 5)];
}
