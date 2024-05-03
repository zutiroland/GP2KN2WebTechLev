<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GP2KN2 feldolgozo</title>
</head>
<body>
    <font-style="font-size:18pt">
    <h2>HTML5 űrlap GP2KN2</h2>
    <?php
    echo("<strong>Név: </strong>" . $_POST['nev'] . "<br><br>");
    echo("<strong>PIN kód: </strong>" . $_POST['kod'] . "<br><br>");
    echo("<strong>Gyümölcs: </strong>" . $_POST['gyumolcs'] . "<br><br>");
    echo("<strong>Életkor: </strong>" . $_POST['eletkor'] . "<br><br>");
    echo("<strong>Lábméret: </strong>" . $_POST['labmeret'] . "<br><br>");
    echo("<strong>Önbizalom: </strong>" . $_POST['onbizalom'] . "<br><br>");
    ?>
    <a href="gp2kn2_urlap.html">Vissza a főoldalra</a>
    </font-style>
</body>
</html>