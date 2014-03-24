var canvasWidth = window.screen.availWidth;
var canvasHeight = window.screen.availHeight;
var canvas = 0;
var speed = 50;
var t1 = 0;

function initCanvas() {
	canvas = new createjs.Stage("gameCanvas");
	document.getElementById("gameCanvas").width = canvasWidth;
	document.getElementById("gameCanvas").height = canvasHeight;
}

function startWords() {
	startWord();
	setInterval(function() {
		startWord();
	}, 2000);
	var t = setInterval(function() {
		if (speed >= 0) {
			speed -= 5;
		} else if (speed < 0) {
			speed += 6;
		}
		;
		console.log(speed);
		//clearInterval(t1);
	}, 2000);
}

function startWord() {
	var thisWord = select_word();
	var text = new createjs.Text(thisWord, "250% Segoe UI", "black");
	text.textBaseline = "alphabetic";
	var thisX = canvasWidth / 15 + ((Math.random() * canvasWidth) * 0.8);
	text.x = thisX;
	text.y = 0;
	canvas.addChild(text);
	canvas.update();
	t1 = setInterval(function() {
		text.y += 1;
		canvas.update();
	}, speed);
}

/*
 function getWord() {
 var dummyWords = new Array("this", "is", "sparta", "hello", "world", "joker", "narendra", "ravi", "wtp", "kickass", "jolly", "madam", "it seems", "muhaha", "weka", "");
 return dummyWords[Math.floor(Math.random() * 15)];
 }*/
