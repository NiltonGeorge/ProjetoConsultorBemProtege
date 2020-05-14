<!DOCTYPE html>
<html lang="pt-br">
<html>
	<head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="lib/style.css">
		<link rel="stylesheet" href="css/styles.css">
		<title>Bem Protege - Simulação - Tabela Fipe</title>
		<link href="https://fonts.googleapis.com/css?family=Montserrat:100,400" rel="stylesheet">
		<script type="text/javascript" src="js/scripts.js"></script>		
		<meta name="viewport" content="width=device-width, inital-scale=1.0">
	</head>
	<body>
        <div id="navigation" class="navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="depoimento.html">Depoimentos</a></li>
                <li><a href="beneficio.html	">Benefícios</a></li>
                <li><a href="simulacao.php">Simulação</a></li>
                <!-- <li><a href="contato.html">Contato</a></li> -->
                <li id="threeline-icon" class="threeline-icon" onclick="openNav()">&#9776;</li>
            </ul>
        </div>
        <br>
        <br>

    <form name="formFipe" id="formFipe" method="post" action="controller/controllerFipe.php">
        <select name="brand" id="brand" required>
            <option value="">Selecione</option>
        </select>

        <select name="vehicles" id="vehicles" required>
            <option value="">Selecione</option>
        </select>

        <select name="year" id="year" required>
            <option value="">Selecione</option>
        </select>
    </form>
    <script src="lib/zepto.min.js"></script>
    <script src="lib/javascript.js"></script>   

    <h4 >Depois de selecionar todos os dados aqui deve aparecer o valor do veículo e o valor da mensalidade</h4>
    <br><br>
    <button type="submit">Fechar com consultor</button>
</body>
</html>