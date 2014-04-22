<?PHP 
 $link = @mysql_connect("localhost", "root", ""); 
 if (mysql_errno()){ 
 	exit("-2"); 
 } 
 mysql_select_db('highscore', $link); 
 if (mysql_errno()){ 
 	exit("-3"); 
 } 
 $sql = "SELECT * FROM scores"; 
 $result = mysql_query($sql, $link); 
 if (mysql_errno()){ 
 	exit("-4"); 
 } 
 echo "["; 
 $row = mysql_fetch_array($result); 
 while ($row){ 
  echo "[\"".$row["name"]."\",".$row["score"]."]"; 
 $row = mysql_fetch_array($result); 
 if ($row){ 
  echo ","; 
 } 
 } 
  echo "]"; 
 ?> 
