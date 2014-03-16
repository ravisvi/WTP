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

function startWords() {
	setInterval("startWord(); context.clearRect(0, 0, canvasWidth, canvasHeight);", 100);
}

function startWord() {
	context.font = "175% Helvetica";
	var thisWord = getWord();
	var thisX = canvasWidth/15 + ((Math.random() * canvasWidth) * 0.8);
	var thisY = 0;
	var t = setInterval(function() {
		context.fillText(thisWord, thisX, thisY);
		thisY += 10;
	}, 100);

}

function getWord() {
	var dummyWords = new Array("this", "is", "sparta", "hello", "world", "joker", "narendra", "ravi", "wtp", "kickass", "jolly", "madam", "it seems", "muhaha", "weka", "");
	return dummyWords[Math.floor(Math.random() * 15)];
}
