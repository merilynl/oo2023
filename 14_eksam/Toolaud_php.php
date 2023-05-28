<?php
require_once "../../config_tarkvaraarendus2023.php";


$conn = new mysqli($GLOBALS["server_host"], $GLOBALS["server_user_name"], $GLOBALS["server_password"], $GLOBALS["database"]);
$conn->set_charset("utf8");
// $stmt = $conn->prepare("SELECT Opilane.Nimi, Arve.Arve_number FROM Arve, Opilane WHERE Opilane.ID = Arve.Opilane_ID AND Arve.Maksetahtaeg < CURRENT_TIMESTAMP AND Arve.Staatus = Maksmata ORDER BY Arve.Maksetahtaeg DESC LIMIT 3");
echo $conn->error;