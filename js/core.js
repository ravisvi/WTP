var canvasWidth = window.screen.availWidth;
var canvasHeight = window.screen.availHeight;
var canvas = 0;
var speed = 10;

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
}

function handleEvent() {
	var my_cur = cur_in_use;
	var flag = false;
	for (var i = 0; i < my_cur.length; i++) {
		var letter = String.fromCharCode(event.keyCode + 32);
		if (letter == my_cur[i].charAt(0)) {
			flag = true;
			window.removeEventListener("keydown", handleEvent, true);
			window.addEventListener("keydown", function() {
				finishWord(my_cur[i]);
			}, true);
			finishWord(my_cur[i]);

			my_cur[i] = my_cur[i].substr(1);
			console.log(letter + " : " + my_cur[i]);
		}
	};
}

function finishWord(curWord) {
	//while (curWord.length > 0) {
	console.log("here");
	var letter = String.fromCharCode(event.keyCode + 32);
	if (letter == curWord.charAt(0)) {
		curWord = curWord.substr(1);
		console.log(letter + " : " + curWord);
	}
	//}
	//event listener household job
	window.removeEventListener("keydown", finishWord, true);
	window.addEventListener("keydown", function() {
		handleEvent();
	}, true);
}

function startWord() {
	var thisWord = select_word();
	var text = new createjs.Text(thisWord, (175 + (Math.random() * 150)) + "% Helvetica", "black");
	text.textBaseline = "alphabetic";
	var thisX = canvasWidth / 15 + ((Math.random() * canvasWidth) * 0.75);
	text.x = thisX;
	text.y = 0;
	canvas.addChild(text);
	canvas.update();
	var t1 = setInterval(function() {
		text.y += 1;
		canvas.update();
		if (text.y > canvasHeight + 50) {
			clearInterval(t1);
		}
	}, ((Math.random() * 5) + speed));
}

/* version 2 */

function start() {
	window.addEventListener("keydown", function() {
		handleType();
	}, true);

	var cur_list;
	var readonly_cur_list;
	var t;
	var fonts = new Array("Helvetica", "Book Antiqua", "Arial Black", "Comic Sans MS", "Copperplate Gothic Light", "Rage Italic", "Times New Roman", "Futura");

	function init() {
		t = setInterval(function() {
			document.getElementById("timerval").innerHTML = parseInt(document.getElementById("timerval").innerHTML) + 1;
		}, 1000);

		cur_list = new Array();
		readonly_cur_list = new Array();

		for (var i = 0; i < Math.ceil(Math.random() * 6) + 2; i++) {
			var thisWord = select_word();
			cur_list[i] = thisWord;
			readonly_cur_list[i] = thisWord;
			document.getElementById("game").innerHTML += "<p id='" + thisWord + "' style='position: absolute; font-family: " + fonts[Math.floor(Math.random() * 8)] + ";font-size: " + (Math.random() * 75 + 100) + "% ;top: " + (10 + (Math.random() * 80)) + "%; left: " + (10 + (Math.random() * 80)) + "%;'>" + thisWord + "</p>";
		};
	}

	function handleType() {
		var letter = String.fromCharCode(event.keyCode + 32);
		for (var i = 0; i < cur_list.length; i++) {
			if (letter == cur_list[i].charAt(0)) {
				cur_list[i] = cur_list[i].substr(1);
				document.getElementById(readonly_cur_list[i]).innerHTML = cur_list[i];
			}
		};

		var complete = true;
		for (var i = 0; i < cur_list.length; i++) {
			if (cur_list[i].length != 0) {
				complete = false;
			}
		}

		if (complete) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Score : " + document.getElementById("timerval").innerHTML;
			init();
		}
	}

	init();
}
