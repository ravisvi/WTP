<?php 
 $name = $_GET['Name']; 
 $score = $_GET['Score'];
 $date = $_GET['Date_'];
 $game_type = $_GET['Game_Type']; 
 
 	$link = @mysql_connect("localhost", "root", ""); 
 	if (mysql_errno()){ 
 		exit("-2"); 
 	} 
 	mysql_select_db('wtp', $link); 
 	if (mysql_errno()){ 
 		exit("-3"); 
 	} 
 	$sql = "INSERT INTO highscores(Name, Score, Date_, Game_Type) VALUES('$name', $score, '$date', '$game_type')"; 
 	$result = mysql_query($sql, $link); 
 	if (mysql_errno()){ 
 		exit("-4"); 
 	}

 exit("1"); 
?> 
