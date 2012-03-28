<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Démonstration de l'API HTML5 History</title>
		<link rel="stylesheet" href="main.css">
	</head>
	<body>
		<h1>Le monde merveilleux de HTML5</h1>
		<nav>
			<ul>
				<li><a href="semantique">Sémantique</a></li>
				<li><a href="hors-ligne-stockage">Hors-ligne et stockage</a></li>
				<li><a href="acces-materiel">Accès au matériel</a></li>
			</ul>
		</nav>
		<div id="detail">
			<?php
				if (isset($_GET['page'])) {
            		$page = $_GET['page'];
        			include_once('includes/' . $page . '.php');
        		}
			?>
		</div>

	</body>
</html>
