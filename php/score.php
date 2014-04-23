<?php 
 $name = $_GET['name']; 
 $score = $_GET['scoref'];
 $date = $_GET['date'];
 $game_type = $_GET['game_type']; 
 
 	$link = mysqli_connect("localhost", "root", '', "highscore"); 
 	if (mysqli_errno($link)){ 
 		exit("-2"); 
 	}
	
 	$sql = "INSERT INTO scores (name, score, date_, game_type) VALUES('$name', $score, '$date', '$game_type')"; 
 	$result = mysqli_query($link, $sql);

	echo "<html>
	<style>body {background: url(\"../img/gameover.jpg\"); background-size: 100% 100%;}</style>
		<body>
			<div style='padding: 2%; border-radius: 10%; background: #EEEEEE; opacity: 0.6; text-align: center; position : absolute; top: 30%; font-size: 150%; height: 20%; width: 20%; left: 35%;'>
				<strong>Nice Game!</strong> <br />Your score is " . $score . ". <br />
				<a href='\WTP\index.php'>View them here or Play Again!</a>
			</div>
		</body>
	</html>
					"
?> 
