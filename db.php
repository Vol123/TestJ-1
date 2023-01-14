<?php

    $host = "mysql:host=localhost;dbname=testj";
    $username = "Volodya";
    $password = "123agoleta123";

    $db = new PDO($host, $username, $password);
    $sql = "SELECT * FROM tablej";
    $table = [];

    if ($quary = $db->query($sql))
        $table = $quary->fetchAll(PDO::FETCH_ASSOC);
    else
        print_r($db->errorInfo());

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>TestJ</title>
</head>
<body>
    <section class="table">
            <div class="row">
                <div class="column th">ID</div>
                <div class="column th">Country</div>
                <div class="column th">Population</div>
                <div class="column th">Rule</div>
                <div class="column th">Capital</div>
                <div class="column th">Image Country</div>
                <div class="column th">Image Rule</div>
                <div class="column th">Image Capital</div>
            </div>
 
            <?php foreach ($table as $data): ?>
            <div class="row data">
                <div class="column item">
                    <div><?php echo $data['ID']?></div>
                </div>
                <div class="column item">
                    <div><?php echo $data['Country']?></div>
                </div>
                <div class="column item">
                    <div><?php echo $data['Population']?></div>
                </div>
                <div class="column item">
                    <div><?php echo $data['Rule']?></div>
                </div>
                <div class="column item">
                    <div><?php echo $data['Capital']?></div>
                </div>
                <div class="column item">
                    <?php $imgCountry = base64_encode($data['Image_Name_Path']);?>
                    <img src="data:image/png;base64, <?= $imgCountry ?>" alt="<?php $data['Country']?>">
                </div>
                <div class="column item">
                    1123
                </div>
                <div class="column item">
                    123
                </div>
            </div>

            <?php endforeach; ?>
    </section>
</body>
</html>