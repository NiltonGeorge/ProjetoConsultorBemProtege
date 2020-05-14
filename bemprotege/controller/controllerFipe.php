<?php
include ("../class/ClassFipe.php");
$objFipe=new ClassFipe();
$action=$_GET['action'];
if (isset($_GET['brandId'])) {$brandId=$_GET['brandId'];}else{$brandId=null;}
if (isset($_GET['vehicleId'])) {$vehicleId=$_GET['vehicleId'];}else{$vehicleId=null;}
if (isset($_GET['yearId'])) {$yearId=$_GET['yearId'];}else{$yearId=null;}

if ($action=='brand') {
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/marcas.json");
    echo $objFipe->getUrl();
}elseif ($action=='vehicles') {
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculos/{$brandId}.json");
    echo $objFipe->getUrl();
}elseif ($action=='year') {
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculo/{$brandId}/{$vehicleId}.json");
    echo $objFipe->getUrl();
}elseif ($action=='preco') {
    $objFipe->setUrl("http://fipeapi.appspot.com/api/1/carros/veiculo/{$brandId}/{$vehicleId}/{$yearId}.json");
    echo $objFipe->getUrl();
}

