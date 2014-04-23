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
		</script>
	</head>

	<body>

		
		<div class="container" style="width: 80%;">
			<div class="header">
				<ul class="nav nav-pills pull-right">
					<li>
						<a href="index.php">Home</a>
					</li>
					<li>
						<a href="about.html">About</a>
					</li>
					<li>
						<a href="contact.html">Contact</a>
					</li>
					<li class="active">
						<a href="#">High Scores</a>
					</li>
				</ul>
				<h3 class="text-muted">WTP for Typing Party</h3>
			</div>

			
			<hr />

			<div style="text-align: center;">
			<h4>High Scores</h4>
				
				<table class="table table-striped" style="margin-left: 20%; width: 60%; margin-bottom: 3%;" >
					<?php
					$link = mysqli_connect("localhost", "root", '', "highscore");
					if (mysqli_errno($link)){
						exit("-2");
					}
					$sql = "SELECT * FROM scores ORDER BY score DESC";
					$result = mysqli_query( $link, $sql);
					//border="1" style="margin-left: 20%; width: 60%; margin-bottom: 3%;" style="text-align: center;">
					//echo "<table class="table table-striped">"
					echo "<tr><th>Name</th><th>Score</th><th>Game Type</th></tr>";
					while ($row = mysqli_fetch_array($result)){
						echo "<tr><td>".$row["name"]."</td><td>".$row["score"]."</td><td>".$row["game_type"]."</td></tr>";
					}
					//echo "</table>"
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
