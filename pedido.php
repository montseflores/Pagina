<?php
$id=$_POST['id'];
$cosa=explode("\n",$id);
include('conexion3.php');
if (!$conn->select_db("inventario")){    
    echo 'No pudo seleccionar la base de datos';
    exit;
}

$texto="Gracias por comprar:\n";
for($i=1;$i<count($cosa);$i++){
    $pedido=explode(" ",$cosa[$i]);
    $sql="select Venta_dia from producto where Id = '".$pedido[0]."'";
    $resultado=$conn->query($sql);
    $row=$resultado->fetch_row();
    $nuevo=$row[0]+intval($pedido[1]);
    $sql="update producto set Venta_dia = ".$nuevo." where Id = '".$pedido[0]."'";
    $resultado=$conn->query($sql);
    $conn->commit();    
    $sql="select Nombre from producto where Id = '".$pedido[0]."'";
    $resultado=$conn->query($sql);
    $row=$resultado->fetch_row();
    $texto=$texto.$row[0]." x".$pedido[1]."\n";

}
echo '<div class = "caja"> '.$texto.' </div>';


$conn->close();



?>
<html>
    <head>
        <link rel="stylesheet" href="style2.css">
    </head>
</html>