<?php
include "PDOHandler.php";

			$idPlaza = $_POST['idPlaza'];
			$nombrePlaza = $_POST['nombrePlaza'];
			$descripcionPlaza = $_POST['descripcionPlaza'];
			$ciudadPlaza = $_POST['ciudadPlaza'];
			$estadoPlaza = $_POST['estadoPlaza'];

			$pdo = new PDOHandler("../assets/dbSettings.ini","db_maestro");
			
			$prepareStatement = $pdo->prepare('INSERT INTO PLAZA (ID_PLAZA,NOMBRE,DESCRIPCION,CIUDAD,ESTADO) VALUES (:idPlaza,:nombrePlaza,:descripcionPlaza,:ciudadPlaza,:estadoPlaza)');

			$result = $prepareStatement->execute(array('idPlaza'=> $idPlaza , 'nombrePlaza' => $nombrePlaza , 'descripcionPlaza' => $descripcionPlaza, 'ciudadPlaza' => $ciudadPlaza , 'estadoPlaza' => $estadoPlaza));
		

			if(	$result != FALSE){
				echo "Inserted";
			}
				else {
					echo json_encode($prepareStatement->errorInfo());
				}






?>