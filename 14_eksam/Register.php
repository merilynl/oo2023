<?php
	require_once "fnc_user.php";
	
	$notice = null;
    $username_error = null;
    $password_error = null;
    $confirm_password_error = null;

	if($_SERVER["REQUEST_METHOD"] == "POST"){
		if (isset($_POST["user_data_submit"])){
			
			if(isset($_POST["username_input"]) and !empty($_POST["username_input"])){
				$username = $_POST["username_input"];
			} else {
				$username_error = "Palun sisestage kasutajatunnus!";
			}
			if(isset($_POST["password_input"]) and !empty($_POST["password_input"])){
				if(strlen($_POST["password_input"]) < 4){
					$password_error = "Palun sisesta pikem parool, min 4 märki";
				}
			} else {
				$password_error = "Palun sisesta parool!";
			}
			if(isset($_POST["confirm_password_input"]) and !empty($_POST["confirm_password_input"])){
				if($_POST["confirm_password_input"] != $_POST["password_input"]){
					$confirm_password_error = "Sisestatud paroolid on erinevad!";
				}
			} else {
				$confirm_password_error = "Palun sisesta parool õigesti kaks korda!";
			}
            if(empty($username_error) and empty($password_error) and empty($confirm_password_error)){
				
				$notice = sign_up($username, $_POST["password_input"]);
				if (empty($notice)){
					echo ("salvestan");
				}
			}
		}
	}		
?>

<!DOCTYPE html>
<html lang="et">
  <head>
    <meta charset="utf-8">
	
  </head>
  <body>
	
	<hr>
    <h2>Loo endale kasutajakonto</h2>
		
	<form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <label for="username_input">Kasutajatunnus:</label><br>
	  <input name="username_input" id="username_input"><span><?php echo $username_error; ?></span><br>
	  <label for="password_input">Salasõna (min 4 tähemärki):</label><br>
	  <input name="password_input" id="password_input" type="password"><span><?php echo $password_error; ?></span><br>
	  <label for="confirm_password_input">Korrake salasõna:</label><br>
	  <input name="confirm_password_input" id="confirm_password_input" type="password"><span><?php echo $confirm_password_error; ?></span><br>
	  <input name="user_data_submit" type="submit" value="Loo kasutaja"><span><?php echo $notice; ?></span>
	</form>
	<p>Tagasi <a href="Login.php"> sisselogimise lehele</a></p>
  </body>
</html>