<?php
include('conexion3.php');
$db="inventario";

$nombre="humanito";
$id="hu";
$precio=15;
$venta_dia=1;
$conn->select_db("inventario");
$sql="INSERT INTO producto(Nombre,Id,Precio,Venta_dia) VALUES ('".$nombre."','".$id."',".$precio.",".$venta_dia.")";
$conn->query($sql);
$conn->commit();
?> 