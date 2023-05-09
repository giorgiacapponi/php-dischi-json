<?php 

$string_json= file_get_contents("file.json");
$data_array= json_decode($string_json,true);

$response=[
    "results"=>$data_array
];

header('Content-Type: application/json');
echo json_encode($response);

