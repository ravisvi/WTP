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

	echo "<html><script type='text/javascript' src='../js/bootstrap.css'></script><div class='row marketing'><div class='col-lg-6'><h4>Nice Game!</h4><p>Score submitted, <a href='\WTP\index.php'>View them here or Play Again!</a></p></html>
					"
?> 
