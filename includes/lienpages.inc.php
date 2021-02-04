<?php
$tabAssociatif = array("route" => "../pages/route.html", "cross" => "../pages/cross.html" , "piste" => "../pages/piste.html" , 
"enfants" => "../pages/enfants.html" , "nous-contacter" => "../pages/nous-contacter.html");

foreach ($tabAssociatif as $cle => $valeur) {
    echo "<li><a href=$valeur>$cle</a></li>" ;
}
?>