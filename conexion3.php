<?php
$conn=mysqli_connect("localhost","root","","inventario");
 // Verificar la conexion
 if(!$conn){
    echo "Fallo la conexion <br>";
    die("Falló la conexion: " . mysqli_connect_error());
}
else{
   // echo "Conexion Exitosa";
}
?>