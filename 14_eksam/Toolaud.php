<?php
//require("Toolaud_php.php");
require_once "../../config_tarkvaraarendus2023.php";

$conn = new mysqli($GLOBALS["server_host"], $GLOBALS["server_user_name"], $GLOBALS["server_password"], $GLOBALS["database"]);
$conn->set_charset("utf8");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
	    <title>Töölaud</title>
        <link rel="stylesheet" href="Toolaud.css">
    </head>
    <body>
        <div id="header">
            <div id="tlu_logo">
                <img src="img/TLU_logo.jpg" id="tlu_logo_img">
            </div>
            <hr>
            <div id="home">
                <button id="home_btn">
                    <img src="img/home_btn.png" id="home_btn_img">
                </button>
            </div>
            <hr>
        </div>
        <div id="notifications">
            <button id="notif_btn">
                <img src="img/teated_btn.png" id="notif_btn_img">
                <span class="notif_bubble" id="notif_bubble"></span>
            </button>
            <div id="notifs">
                <ul>
                    <li>Siia tulevad teated</li>
                </ul>
            </div>
        </div>
        <br>
        <div id="tables" class="row">
        <div class="column">
            <!-- ÕPPEKAVAD -->
            <div id="table1" class="table">
            <h2>ÕPPEKAVAD</h2>
            <?php
                $query1 = "SELECT Oppekava.Oppekava_kood, Oppekava.Nimetus, Oppekava.Sisestamise_kuupaev, Oppekava.Staatus FROM Oppekava ORDER BY Oppekava.Sisestamise_kuupaev DESC LIMIT 3";
                $result1 = mysqli_query($conn, $query1);
            ?>
                <table>                
                    <tr>
                        <th scope="col">Õppekava kood</th>
                        <th scope="col">Õppekava nimetus</th>
                        <th scope="col">Sisestamise kuupäev</th>
                        <th scope="col">Staatus</th>
                        <th scope="col"> </th>
                    </tr>
                    <?php
                        if (mysqli_num_rows($result1) > 0) {
                        $sn=1;
                        while($data = mysqli_fetch_assoc($result1)) {
                    ?>
                    <tr>
                        <td><?php echo $data['Oppekava_kood']; ?></td>
                        <td><?php echo $data['Nimetus']; ?></td>
                        <td><?php echo $data['Sisestamise_kuupaev']; ?></td>
                        <td><?php echo $data['Staatus']; ?></td>
                        <td><a href="Oppekava/<?php echo $data['Oppekava_kood']; ?>.php" ><?php if($data['Staatus']='Lukustatud'){echo("Vaata õppekava");}else{echo("Muuda õppekava");} ?></a></td>
                    </tr>
                    <?php
                        $sn++;}}  
                    ?>
                    
                </table> 
            </div>
            <!-- ARVED -->
            <div id="table2" class="table">
            <h2>MAKSMATA ARVED</h2>
            <?php
                $query2 = "SELECT Opilane.Nimi, Arve.Arve_number, Arve.Maksetahtaeg, Kursus.Nimetus, Kursus.Kursuse_kood FROM Arve JOIN Opilane ON Opilane.ID = Arve.Opilane_ID JOIN Opilane_kursus ON Opilane.ID = Opilane_kursus.Opilane_ID JOIN Kursus ON Opilane_kursus.Kursus_ID = Kursus.ID WHERE Arve.Maksetahtaeg < CURRENT_TIMESTAMP AND Arve.Staatus = 'Maksmata' ORDER BY Arve.Maksetahtaeg DESC LIMIT 3";
                $result2 = mysqli_query($conn, $query2);
            ?>
                <table>
                    <tr>
                        <th scope="col">Linastuse kood</th>
                        <th scope="col">Linastuse nimetus</th>
                        <th scope="col">Maksja nimi</th>
                        <th scope="col">Arve nr</th>
                        <th scope="col">Maksetähtaeg</th>
                    </tr>
                    <?php
                        if (mysqli_num_rows($result2) > 0) {
                        $sn=1;
                        while($data = mysqli_fetch_assoc($result2)) {
                    ?>
                    <tr>
                        <td><?php echo $data['Kursuse_kood']; ?></td>
                        <td><?php echo $data['Nimetus']; ?></td>
                        <td><?php echo $data['Nimi']; ?></td>
                        <td><a href="Arve/<?php echo $data['Arve_number']; ?>.php" ><?php echo $data['Arve_number']; ?></a></td>
                        <td><?php echo $data['Maksetahtaeg']; ?></td>
                    </tr>
                    <?php
                        $sn++;}}  
                    ?>
                </table> 
            </div>
        </div>
        <div class="column">
            <!-- ALGAVAD KURSUSED -->
            <div id="table3" class="table">
                <h2>ALGAVAD KURSUSED</h2>
                
                <table>
                    <tr>
                        <th scope="col">Linastuse kood</th>
                        <th scope="col">Kursuse nimetus</th>
                        <th scope="col">Linastus</th>
                        <th scope="col">Kursusele registreerunud</th>
                        <th scope="col">Koostamata arved</th>
                    </tr>
                    <?php
                    // $query = "SELECT COUNT(Opilane_kursus.Opilane_ID) AS Osalevad_opilased, COUNT(Arve.Arve_number) AS Koostamata_arved, Kursus.Alguse_aeg, Kursus.Nimetus, Kursus.Kursuse_kood FROM Arve JOIN Opilane ON Opilane.ID = Arve.Opilane_ID JOIN Opilane_kursus ON Opilane.ID = Opilane_kursus.Opilane_ID JOIN Kursus ON Opilane_kursus.Kursus_ID = Kursus.ID WHERE Kursus.Alguse_aeg > CURRENT_TIMESTAMP ORDER BY Kursus.Alguse_aeg DESC LIMIT 3";

                    $stmt1 = mysqli_prepare($conn, "SELECT Kursus.Kursuse_kood FROM Kursus JOIN Opilane_kursus ON Kursus.ID = Opilane_kursus.Kursus_ID JOIN Opilane ON Opilane_kursus.Opilane_ID = Opilane.ID JOIN Arve ON Opilane.ID = Arve.Opilane_ID WHERE Kursus.Alguse_aeg > CURRENT_TIMESTAMP ORDER BY Kursus.Alguse_aeg LIMIT 3");
                    mysqli_stmt_bind_result($stmt1, $kursuse_kood_from_db);
                    $stmt1->execute();
                    $result3 = $stmt1->get_result();
                    $rows = $result3->fetch_all(MYSQLI_ASSOC);
                    for($x = 0; $x <= 2; $x++){
                        $kursuse_kood = $rows[$x]['Kursuse_kood'];
                    
                        //$stmt2 = mysqli_prepare($conn, "SELECT COUNT(Opilane_kursus.ID) AS Osalevad_opilased, COUNT(Arve.ID) AS Koostamata_arved, Kursus.Nimetus, Kursus.Kursuse_kood, Kursus.Alguse_aeg FROM Kursus JOIN Opilane_kursus ON Kursus.ID = Opilane_kursus.Kursus_ID JOIN Opilane ON Opilane_kursus.Opilane_ID = Opilane.ID JOIN Arve ON Opilane.ID = Arve.Opilane_ID WHERE Kursus.Kursuse_kood = ?");

                        $stmt2 = mysqli_prepare($conn, "SELECT SUM(CASE WHEN Opilane_kursus.ID IS NOT NULL THEN 1 ELSE 0 END) AS Osalevad_opilased, SUM(CASE WHEN Arve.ID IS NOT NULL THEN 1 ELSE 0 END) AS Koostamata_arved, Kursus.Nimetus, Kursus.Kursuse_kood, Kursus.Alguse_aeg FROM Kursus JOIN Opilane_kursus ON Kursus.ID = Opilane_kursus.Kursus_ID JOIN Opilane ON Opilane_kursus.Opilane_ID = Opilane.ID JOIN Arve ON Opilane.ID = Arve.Opilane_ID WHERE Kursus.Kursuse_kood = ?");
                        mysqli_stmt_bind_param($stmt2, "s", $kursuse_kood);
                        $stmt2->execute();
                        $result4 = $stmt2->get_result();
                        $rows2 = $result4->fetch_all(MYSQLI_ASSOC);
                        if(!empty($rows2)){
                        $osalevad = $rows2[0];
                        ?>
                        <tr>
                            <td><?php echo $osalevad['Kursuse_kood']; ?></td>
                            <td><a href="Kursus/<?php echo $osalevad['Kursuse_kood']; ?>.php" ><?php echo $osalevad['Nimetus']; ?></a></td>
                            <td><?php echo $osalevad['Alguse_aeg']; ?></td>
                            <td><?php echo $osalevad["Osalevad_opilased"]; ?></td>
                            <td><?php echo $osalevad['Koostamata_arved']; ?></td>
                        </tr>
                        <?php
                        }
                    }
                    ?>
                </table> 
            </div>
            <!-- LÕPPENUD KURSUSED -->
            <div id="table4" class="table">
                <h2>LÕPPENUD KURSUSED</h2>
                <table>
                    <tr>
                        <th scope="col">Linastuse kood</th>
                        <th scope="col">Kursuse nimetus</th>
                        <th scope="col">Lõppemise kuupäev</th>
                        <th scope="col">Osalejate arv</th>
                        <th scope="col">Saadetud tunnistused/tõendid</th>
                    </tr>
                    <?php
                    $stmt3 = mysqli_prepare($conn, "SELECT Toend_tunnistus.ID FROM Toend_tunnistus JOIN Opilane ON Toend_tunnistus.ID = Opilane.Toend_tunnistus_ID JOIN Opilane_kursus ON Opilane.ID = Opilane_kursus.Opilane_ID JOIN Kursus ON Opilane_kursus.Kursus_ID = Kursus.ID WHERE Kursus.Alguse_aeg < CURRENT_TIMESTAMP ORDER BY Kursus.Alguse_aeg LIMIT 3");
                    mysqli_stmt_bind_result($stmt3, $kursuse_kood_from_db);
                    $stmt3->execute();
                    $result5 = $stmt3->get_result();
                    $rows3 = $result5->fetch_all(MYSQLI_ASSOC);
                    //var_dump($rows3);
                    if(!empty($rows3)){
                        for($x = 0; $x <= 2; $x++){
                            $kursuse_kood = $rows3[$x]['Kursuse_kood'];
    
                        $stmt2 = mysqli_prepare($conn, "SELECT COUNT(Opilane_kursus.ID) AS Osalevad_opilased, COUNT(Toend_tunnistus.ID) AS Koostatud_toendid_tunnistused, Kursus.Nimetus, Kursus.Kursuse_kood, Kursus.Loppemise_aeg FROM Kursus JOIN Opilane_kursus ON Kursus.ID = Opilane_kursus.Kursus_ID JOIN Opilane ON Opilane_kursus.Opilane_ID = Opilane.ID JOIN Toend_tunnistus ON Toend_tunnistus.ID = Toend_tunnistus.ID WHERE Toend_tunnistus.ID = ?");
                        mysqli_stmt_bind_param($stmt2, "s", $kursuse_kood);
                        $stmt2->execute();
                        $result6 = $stmt2->get_result();
                        $rows4 = $result6->fetch_all(MYSQLI_ASSOC);
                        $osalevad2 = $rows4[0];
                    }
                    
                    ?>
                    <tr>
                        <td><?php echo $osalevad2['Kursuse_kood']; ?></td>
                        <td><a href="Kursus/<?php echo $data['Kursuse_kood']; ?>.php" ><?php echo $osalevad2['Nimetus']; ?></a></td>
                        <td><?php echo $osalevad2['Loppemise_aeg']; ?></td>
                        <td><?php echo $osalevad2['Osalevad_opilased']; ?></td>
                        <td><?php echo $osalevad2['Koostatud_toendid_tunnistused']; ?></td>
                    </tr>
                    <?php
                    }
                    ?>
                </table> 
            </div>
        </div>
        </div>
    </body>
    <script src="Toolaud.js"></script>
</html>