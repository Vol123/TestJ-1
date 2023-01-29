<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestJ</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<body onload="showTable()">
    <table id="mainTable">
        <thead>
            <th></th>
            <th style="display: none;"></th>
            <th>Country</th>
            <th>Population</th>
            <th>Rule</th>
            <th>Capital</th>
            <th>Image Country</th>
            <th>Image Rule</th>
            <th>Image Capital</th>
        </thead>
        <tbody id="tbody"></tbody>
    </table>

    <div class="formChangeRow">

    </div>

	<input id="AddRow" type="submit" value="Add Column"/>
</body>

<script>
    let changeTableBool = false;
    function showTable() {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            document.getElementById("tbody").innerHTML = this.responseText;
        }
        xmlhttp.open("POST", "PHP DATABASE/getTable.php");
        xmlhttp.send();
    }

    function changeRow(event) {
        return;
    }

    function deleteRow(event) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            return;
        }
        xmlhttp.open("GET", "PHP DATABASE/deleteRow.php?id=" + event.id);
        xmlhttp.send();

        $("#" + event.id).parent().parent().remove();
    }

    $(document).on('click', '#AddRow', function () {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            let tbody = document.getElementById("tbody");
            tbody.innerHTML = `
            <tr>
            <td><input id=\"${this.responseText}\" type=\"submit\" onclick=\"deleteRow(this)\" value=\"Delete\"><input type=\"submit\" onclick=\"changeRow(this)\" value=\"Change\"></td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><img src=\"data:image/png;base64," . base64_encode($row['Image_Country']) . "\"></td>
            <td><img src=\"data:image/png;base64," . base64_encode($row['Image_Rule']) . "\"></td>
            <td><img src=\"data:image/png;base64," . base64_encode($row['Image_Capital']) . "\"></td>
            </tr>` + tbody.innerHTML;
        }
        xmlhttp.open("POST", "addRow.php");
        xmlhttp.send();
    })
</script>

</html>

