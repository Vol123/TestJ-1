<?php 
    include "PHP DATABASE/connect.php";

    $result = mysqli_query($conn, "INSERT INTO `tablej` (`Country`) VALUES ('');");
    echo $conn->insert_id;

    $conn->close();
?>