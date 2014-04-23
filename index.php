<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="A fun game to improve vocabulary and typing speed.">
		<meta name="author" content="Narendra. Ravi.">
		<!--<link rel="shortcut icon" href="../../assets/ico/favicon.png">-->

		<title>WTP for Typing Party</title>

		<link href="lib/bootstrap.css" rel="stylesheet">
		<link rel="stylesheet" href="css/layout.css"/>
		<link href="lib/jumbotron-narrow.css" rel="stylesheet">
		<script type="text/javascript" src="js/core.js"></script>
		<script type="text/javascript" src="lib/jquery.min.js"></script>
		<script type="text/javascript" src="lib/bootstrap.js"></script>
		<script type="text/javascript" src="js/snd.js"></script>
		<script type="text/javascript">
			function toggle() {
				document.getElementById("start").style.visibility = "hidden";
				document.getElementById("modeOne").style.visibility = "visible";
				document.getElementById("modeMany").style.visibility = "visible";
				document.getElementById("modeTimed").style.visibility = "visible";
			}

			function openModal(mode) {
				//alert(mode);
				$('#myModal').on('show', function() {
					$('iframe').attr("src", mode);
					alert("changed");
				});
				$('#myModal').modal({
					show : true
				})
			}
		</script>
	</head>

	<body>

		<div id="myModal" class="modal hide fade" tabindex="-1">
			<div class='modal-dialog' style="width: 90%;">
				<div class='modal-content'>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">
							Close ×
						</button>
						<h3>Dialog</h3>
					</div>
					<div class="modal-body">
						<p>
							This is Modal!
						</p>
						<hr />
						<iframe frameborder="0" src=""></iframe>
					</div>
					<div class="modal-footer">
						<button class="btn" data-dismiss="modal">
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container" style="width: 80%;">
			<div class="header">
				<ul class="nav nav-pills pull-right">
					<li class="active">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="about.html">About</a>
					</li>
					<li>
						<a href="contact.html">Contact</a>
					</li>
				</ul>
				<h3 class="text-muted">WTP for Typing Party</h3>
			</div>

			<div class="jumbotron">
				<button id="start" class="btn btn-success" onclick="toggle();" >
					&nbsp;&nbsp;&nbsp;Start&nbsp;&nbsp;&nbsp;
				</button>
				<br />
				<button id="modeOne" class="btn btn-info" onclick="location.href = 'many.html';" style="visibility: hidden;">
					&nbsp;&nbsp;&nbsp;Zen&nbsp;&nbsp;&nbsp;
				</button>
				<button id="modeMany" class="btn btn-info" onclick="location.href = 'many.html';" style="visibility: hidden;">
					&nbsp;&nbsp;&nbsp;Assassin&nbsp;&nbsp;&nbsp;
				</button>
				<button id="modeTimed" class="btn btn-info" onclick="location.href = 'timed.html';" style="visibility: hidden;">
					&nbsp;&nbsp;&nbsp;Ninja&nbsp;&nbsp;&nbsp;
				</button>
			</div>
			<hr />

			<div class="row marketing">
				<div class="col-lg-6">
					<h4>What?</h4>
					<p>
						This is a simple game built using HTML5 and JavaScript for a college Web Tech Project. This helps to improve your vocabulary and improve typing speed.
					</p>

					<h4>Why?</h4>
					<p>
						To build a fun platform to learn the most common GRE words, which is available across all platforms as it's on a browser.
					</p>

					<h4>How?</h4>
					<p>
						There are <b>supposed</b> to be three modes. Arcade, Zen and multiplayer. To understand how each mode helps to improve your speed, <a href="about.html">click here</a> !
					</p>
				</div>

				<div class="col-lg-6">
					<h4>For whom?</h4>
					<p>
						Anyone preparing for GRE, TOEFL, etc. Or anyone who wants to improve their typing speed. Or to kill your time productively.
					</p>

					<h4>About us</h4>
					<p>
						We are a team of two programmers who love Cricket, Anime, Games and FOOD. Get to know more <a href="contact.html">about us</a>.
					</p>

					<h4>Feedback</h4>
					<p>
						This project is a 'just for fun' creation, if you have any feedback to provide please do so, by dropping a mail to <a style="color:green; text-decoration:none;">ravitejasvi@gmail.com</a> or <a style="color: #3b79d6; text-decoration: none;">narendranathjoshi@gmail.com</a>.
					</p>
				</div>
			</div>

			<div style="text-align: center;">
			<h4>High Scores</h4>
				
				<table border="1" style="margin-left: 20%; width: 60%;" style="text-align: center;">
					<?php
					$link = mysqli_connect("localhost", "root", '', "highscore");
					if (mysqli_errno($link)){
						exit("-2");
					}
					$sql = "SELECT * FROM scores";
					$result = mysqli_query( $link, $sql);
					echo "<tr><th>Name</th><th>Score</th><th>Game Type</th></tr>";
					while ($row = mysqli_fetch_array($result)){
						echo "<tr><td>".$row["name"]."</td><td>".$row["score"]."</td><td>".$row["game_type"]."</td></tr>";
					}
					?>

				</table>
			</div>

			<div class="footer">
				<p>
					&copy; WTP 2014
				</p>
			</div>

		</div>
		<!-- /container -->
	</body>
</html>
