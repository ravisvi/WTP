var canvasWidth = window.screen.availWidth;
var canvasHeight = window.screen.availHeight;
var canvas = 0;

function initCanvas() {
	canvas = new createjs.Stage("gameCanvas");
	document.getElementById("gameCanvas").width = canvasWidth;
	document.getElementById("gameCanvas").height = canvasHeight;
}

function startWords() {
	setInterval("startWord();", 4000);
}

function startWord() {
	var thisWord = getWord();
	var text = new createjs.Text(thisWord, "200% Segoe UI", "black");
	text.textBaseline = "alphabetic";
	var thisX = canvasWidth / 15 + ((Math.random() * canvasWidth) * 0.8);
	text.x = thisX;
	text.y = 0;
	canvas.addChild(text);
	canvas.update();
	var t = setInterval(function() {
		text.y += 1;
		canvas.update();
	}, 10);

}

function getWord() {
	var dummyWords = new Array("this", "is", "sparta", "hello", "world", "joker", "narendra", "ravi", "wtp", "kickass", "jolly", "madam", "it seems", "muhaha", "weka", "");
	return dummyWords[Math.floor(Math.random() * 15)];
}
