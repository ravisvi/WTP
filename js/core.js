var canvasWidth = window.screen.availWidth;
var canvasHeight = window.screen.availHeight;
var canvas = 0;
var speed = 50;
var t1 = 0;

function initCanvas() {
	canvas = new createjs.Stage("gameCanvas");
	var c = document.getElementById("gameCanvas");
	c.width = canvasWidth;
	c.height = canvasHeight;
}

function startWords() {
	startWord();
	window.addEventListener("keydown", function() {
		handleEvent();
	}, true);
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
		//console.log(speed);
		//clearInterval(t1);
	}, 2000);
}

function handleEvent() {
	var my_cur = cur_in_use;
	var flag = false;
	for (var i = 0; i < my_cur.length; i++) {
		var letter = String.fromCharCode(event.keyCode + 32);
		if (letter == my_cur[i].charAt(0)) {
			flag = true;
			/*window.removeEventListener("keydown", function() {
			 handleEvent();
			 }, true);
			 window.addEventListener("keydown", function() {
			 finishWord(my_cur[i]);
			 }, true);*/
			var return = finishWord(my_cur[i]);
			while () {
				finishWord(my_cur[i]);
			}
			my_cur[i] = my_cur[i].substr(1);
			console.log(letter + " : " + my_cur[i]);
		}
	};
}

function finishWord(curWord) {
	//work here
	var letter = String.fromCharCode(event.keyCode + 32);
	if (letter == curWord.charAt(0)) {
		curWord = curWord.substr(1);
		console.log(letter + " : " + curWord);
	}
	return curWord.length;
	//event listener household job
	/*window.removeEventListener("keydown", function() {
	 finishWord(my_cur[i]);
	 }, true);
	 window.addEventListener("keydown", function() {
	 handleEvent();
	 }, true);*/
}

function startWord() {
	var thisWord = select_word();
	var text = new createjs.Text(thisWord, "250% Helvetica", "black");
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

