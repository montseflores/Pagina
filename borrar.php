<?php
include('conexion3.php');
$db="inventario";
$nombre="Pollito";
$id="Po";
$precio=15;
$venta_dia=1;
$conn->select_db("inventario");
$eliminar= "DELETE FROM producto WHERE Id = '".$id."'";
$conn->query($eliminar);
$conn->commit();
?>