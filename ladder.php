<?php
    $ch = curl_init();
    
    //If a meta exists and doesn't contain any special characters use it as the meta to be displayed, otherwise default to OU
    $meta_exp = "/^[0-9A-z-]{2,20}$/";
       
    if (preg_match($meta_exp,$_GET['meta']))  {
        $meta = $_GET['meta'];
    } else {
        $meta = "OU";
    }
    
    curl_setopt($ch, CURLOPT_URL, "http://pokemonshowdown.com/ladder/" . $meta . ".json");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $ch_result = curl_exec($ch);
    curl_close($ch);

    echo $ch_result;
?>