<!DOCTYPE html>
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="https://cdn.discordapp.com/attachments/1066072940191416372/1066073041081217165/basketball_moon.png" type="image/x-icon">
        <link rel="stylesheet" href="./NavigationalBar/navbar.css">
        <title>Meccsek és eredmények</title>
    </head>
    <body>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&display=swap');
            @font-face {
                font-family: DoubleLine;
                src: url('./Fonts/WanderBrave-axBKK.ttf');
            }

            body {
                background-image: url('https://cdn.discordapp.com/attachments/1066072940191416372/1084082191790784632/background_sidepage_4x.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;
                background-position: center;
            }
            #main_table {
                position: relative;
                width: 80vw;
                height: 70vh;
                left: 10vw;
                top: 5vh;
                background-color: rgb(255, 255, 255, 0.7);
                display: flex;
                flex-direction: row;
                user-select: none;
            }
            #date, #team, #result {
                width: calc(100%/3);
                text-align: center;
            }
            #date > div {
                border-top: 5px solid black;
                border-left: 5px solid black;
                border-bottom: 2.5px solid black;
                font-style: italic;
            }
            #team > div {
                border-top: 5px solid black;
                border-left: 5px solid black;
                border-right: 5px solid black;
                border-bottom: 2.5px solid black;
            }
            #result > div {
                border-top: 5px solid black;
                border-right: 5px solid black;
                border-bottom: 2.5px solid black;
                font-style: italic;
            }
            #date > div, #team > div, #result > div {
                width: auto;
                font-size: 5vh;
                color: white;
                background-color: white;
                font-family: 'Chakra Petch', sans-serif;
                background-color: rgb(255,151,87);
                text-shadow: 5px 2px 0px rgb(206, 121, 69);
            }
            #date > h1, #team > h1, #result > h1 {
                margin-top: 0px;
                margin-bottom: -2px;
                border: 5px solid black;
                font-family: 'Tilt Prism', cursive;

                font-size: 7vh;
                color: white;
                background-color: rgb(255,151,87);
                text-shadow: 0px 0px 40px white;
            }
        </style>
        <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "bda_kosarasok";
            $conn = new mysqli($servername, $username, $password, $dbname);
            if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}
            $sql = "SELECT * FROM mecsek_eredmenyek";
            $result = $conn->query($sql);
                
        ?>
        <!--<div id="navbar">
            <a href="../index.html"><div class="nav_buttons"><p>Kezdő oldal</p></div></a>
            <a href="./calendar.html"><div class="nav_buttons"><p>Naptár</p></div></a>
            <a href="./participants.html"><div class="nav_buttons"><p>Résztvevők</p></div></a>
            <a href="./gallery.html"><div class="nav_buttons"><p>Galéria</p></div></a>
        </div>
        <div id="navbar_call"><img src="https://cdn.discordapp.com/attachments/1066072940191416372/1088189464511254638/cog.png"></div>
        -->
        <div id="main_table">
            <div id="date">
                <h1>Datum</h1>
                <?php
                    $sql = "SELECT * FROM mecsek_eredmenyek";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $date = $row['datum'];
                            echo "<div>".$date."</div>";
                        };
                    };
                ?>
            </div>
            <div id="team">
                <h1>Csapatnev</h1>
                <?php
                    $sql = "SELECT * FROM mecsek_eredmenyek";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $team_name_1 = $row['csapatnev_hazai'];
                            $team_name_2 = $row['csapatnev_ellenfel'];
                            echo "<div>".$team_name_1." - ".$team_name_2."</div>";
                        };
                    };
                ?>
            </div>
            <div id="result">
                <h1>Eredmeny</h1>
                <?php
                    $sql = "SELECT * FROM mecsek_eredmenyek";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $team_score_1 = $row['eredmeny_hazai'];
                            $team_score_2 = $row['eredmeny_ellenfel'];
                            echo "<div>".$team_score_1." - ".$team_score_2."</div>";
                        };
                    };
                ?>
            </div>
        </div>
        <script src="./NavigationalBar/navbar.js"></script>
    </body>
</html>