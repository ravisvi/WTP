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

var fonts = new Array("Helvetica", "Book Antiqua", "Arial Black", "Comic Sans MS", "Copperplate Gothic Light", "Times New Roman", "Futura");
var color = new Array("lightred", "black", "red", "lightblue", "blue", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#003300", "#003333", "#003366", "#003399", "#0033CC", "#0033FF", "#006600", "#006633", "#006666", "#006699", "#0066CC", "#0066FF", "#009900", "#009933", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#330000", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#333300", "#333333", "#333366", "#333399", "#3333CC");

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

var isGameOver = false;

var fonts = new Array("Helvetica", "Book Antiqua", "Arial Black", "Comic Sans MS", "Copperplate Gothic Light", "Times New Roman", "Futura");
var color = new Array("lightred", "black", "red", "lightblue", "blue", "#000033", "#000066", "#000099", "#0000CC", "#0000FF", "#003300", "#003333", "#003366", "#003399", "#0033CC", "#0033FF", "#006600", "#006633", "#006666", "#006699", "#0066CC", "#0066FF", "#009900", "#009933", "#009966", "#009999", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#00FF00", "#00FF33", "#00FF66", "#00FF99", "#00FFCC", "#00FFFF", "#330000", "#330033", "#330066", "#330099", "#3300CC", "#3300FF", "#333300", "#333333", "#333366", "#333399", "#3333CC");

function startMany() {

	isGameOver = false;
	window.addEventListener("keydown", function() {
		handleType();
	}, true);

	var score = 0;
	var mistake = 0;
	var cur_list;
	var readonly_cur_list;
	var t;

	init();

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
			document.getElementById("game").innerHTML += "<p id='" + thisWord + "' style='position: absolute; color: " + color[Math.floor(Math.random() * color.length)] + "; font-family: " + fonts[Math.floor(Math.random() * 7)] + ";font-size: " + (Math.random() * 75 + 100) + "% ;top: " + (10 + (Math.random() * 80)) + "%; left: " + (10 + (Math.random() * 80)) + "%;'>" + thisWord + "</p>";
		};
	}

	function handleType() {
		var letter = String.fromCharCode(event.keyCode + 32);
		var mistakeFlag = false;
		for (var i = 0; i < cur_list.length; i++) {
			if (letter == cur_list[i].charAt(0)) {
				cur_list[i] = cur_list[i].substr(1);
				document.getElementById(readonly_cur_list[i]).innerHTML = cur_list[i];
				mistakeFlag = true;
			}
		};
		if (mistakeFlag == false) {
			mistake += 1;
			console.log("mistake");
		}

		var complete = true;
		for (var i = 0; i < cur_list.length; i++) {
			if (cur_list[i].length != 0) {
				complete = false;
			} else {
				score += 1;
			}
		}

		if (complete) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Score : " + score;
			init();
		}

		if (mistake >= 5) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Game Over. Score : " + score;
			isGameOver = true;
			document.getElementById("game").innerHTML = "";
			var yyyy = new Date().getFullYear().toString();                                    
			var mm = (new Date().getMonth()+1).toString(); // getMonth() is zero-based         
			var dd  = new Date().getDate().toString();
			document.getElementById("scoref").value = score;
			document.getElementById("date").value = dd + '/' + mm + '/' + yyyy;
			document.getElementById("gt").value = "Assassin";
			document.getElementById("scoreForm").submit();
		}
	}

}

function startOne(name) {
	isGameOver = false;
	window.addEventListener("keydown", function() {
		handleType();
	}, true);

	var score = 0;
	var mistake = 0;
	var readonly_cur_word;
	var t;
	var thisWord;

	function init() {
		t = setInterval(function() {
			document.getElementById("timerval").innerHTML = parseInt(document.getElementById("timerval").innerHTML) + 1;
		}, 1000);

		thisWord = select_word();
		readonly_cur_word = thisWord;
		document.getElementById("game").innerHTML += "<p id='" + thisWord + "' style='position: absolute; color: " + color[Math.floor(Math.random() * color.length)] + "; font-family: " + fonts[Math.floor(Math.random() * 8)] + ";font-size: " + (Math.random() * 75 + 100) + "% ;top: " + (10 + (Math.random() * 80)) + "%; left: " + (10 + (Math.random() * 80)) + "%;'>" + thisWord + "</p>";
	};

	init();

	function handleType() {
		var letter = String.fromCharCode(event.keyCode + 32);
		if (letter == thisWord.charAt(0)) {
			thisWord = thisWord.substr(1);
			document.getElementById(readonly_cur_word).innerHTML = thisWord;
		} else {
			mistake += 1;
			console.log("mistake");
		}

		var complete = true;
		if (thisWord.length != 0) {
			complete = false;
		} else {
			score += 1;
		}

		if (complete) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Score : " + score;
			init();
		}

		if (mistake >= 5) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Game Over. Score : " + score;
			isGameOver = true;
			document.getElementById("game").innerHTML = "";
			var yyyy = new Date().getFullYear().toString();                                    
			var mm = (new Date().getMonth()+1).toString(); // getMonth() is zero-based         
			var dd  = new Date().getDate().toString();
			document.getElementById("scoref").value = score;
			document.getElementById("date").value = dd + '/' + mm + '/' + yyyy;
			document.getElementById("gt").value = "Zen";
			document.getElementById("scoreForm").submit();
		}
	}

}

function startTimed() {
	isGameOver = true;
	var flag = false;
	window.addEventListener("keydown", function() {
		handleType();
	}, true);

	var cur_list;
	var readonly_cur_list;
	var t;
	var score = 0;
	var mistake = 0;

	document.getElementById("timerval").innerHTML = 30;
	t = setInterval(function() {
		if (parseInt(document.getElementById("timerval").innerHTML) > 0) {
			document.getElementById("timerval").innerHTML = parseInt(document.getElementById("timerval").innerHTML) - 1;
		}
	}, 1000);

	function init() {
		cur_list = new Array();
		readonly_cur_list = new Array();

		for (var i = 0; i < Math.ceil(Math.random() * 6) + 2; i++) {
			var thisWord = select_word();
			cur_list[i] = thisWord;
			readonly_cur_list[i] = thisWord;
			document.getElementById("game").innerHTML += "<p id='" + thisWord + "' style='position: absolute; color: " + color[Math.floor(Math.random() * color.length)] + "; font-family: " + fonts[Math.floor(Math.random() * 8)] + ";font-size: " + (Math.random() * 75 + 100) + "% ;top: " + (10 + (Math.random() * 80)) + "%; left: " + (10 + (Math.random() * 80)) + "%;'>" + thisWord + "</p>";
		};
	}

	init();

	function handleType() {
		var letter = String.fromCharCode(event.keyCode + 32);
		var mistakeFlag = false;
		for (var i = 0; i < cur_list.length; i++) {
			if (letter == cur_list[i].charAt(0)) {
				cur_list[i] = cur_list[i].substr(1);
				document.getElementById(readonly_cur_list[i]).innerHTML = cur_list[i];
				mistakeFlag = true;
			}
		};
		if (mistakeFlag == false) {
			mistake += 1;
			console.log("mistake");
		}

		var complete = true;
		for (var i = 0; i < cur_list.length; i++) {
			if (cur_list[i].length != 0) {
				complete = false;
			} else {
				score += 1;
			}
		}

		if (complete) {
			init();
		}

		if (parseInt(document.getElementById("timerval").innerHTML) <= 0) {
			clearInterval(t);
			if (flag == false) {
				document.getElementById("score").innerHTML = "Score : " + score;
				document.getElementById("game").innerHTML = "";
				flag = true;
			}
		}

		if (mistake >= 5) {
			clearInterval(t);
			document.getElementById("score").innerHTML = "Game Over. Score : " + score;
			isGameOver = true;
			document.getElementById("game").innerHTML = "";
			var yyyy = new Date().getFullYear().toString();                                    
			var mm = (new Date().getMonth()+1).toString(); // getMonth() is zero-based         
			var dd  = new Date().getDate().toString();
			document.getElementById("scoref").value = score;
			document.getElementById("date").value = dd + '/' + mm + '/' + yyyy;
			document.getElementById("gt").value = "Ninja";
			document.getElementById("scoreForm").submit();
		}
	}
}