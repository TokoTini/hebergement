
<?php
// Paramètres de la requête pour obtenir un token initial
$url = "https://lumiplay.link/auth/realms/lumiserveur/protocol/openid-connect/token";
$contentType = "application/x-www-form-urlencoded";
$grantType = "client_credentials"; // Remplacez par la valeur réelle de grant_type
$clientID = "web-trio-pyrenees"; // Remplacez par la valeur réelle de client_id
$clientSecret = "L4JdMM2suIKywMS4rAyF5IF1iHqijgRt"; // Remplacez par la valeur réelle de client_secret

// Données à envoyer dans la requête pour obtenir un token initial
$data = array(
    'grant_type' => $grantType,
    'client_id' => $clientID,
    'client_secret' => $clientSecret
);

// Encodage des données au format x-www-form-urlencoded
$dataString = http_build_query($data);

// Configuration de la requête cURL pour obtenir un token initial
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: ' . $contentType
));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécution de la requête cURL pour obtenir un token initial
$response = curl_exec($ch);

// Vérification des erreurs
if (curl_errno($ch)) {
    echo 'Erreur cURL : ' . curl_error($ch);
} else {
    echo 'Réponse pour obtenir un token initial : ' . $response;
    // Decodage de la réponse pour obtenir le refresh token et access token
    $responseArray = json_decode($response, true);
    $refreshToken = $responseArray['refresh_token'];
    $accessToken = $responseArray['access_token'];
}

// Fermeture de la session cURL
curl_close($ch);

if (!empty($refreshToken)) {
    // Paramètres de la requête pour renouveler le token avec le refresh token
    $url = "https://lumiplay.link/auth/realms/lumiserveur/protocol/openid-connect/token";
    $contentType = "application/x-www-form-urlencoded";
    $grantType = "refresh_token"; // Changement du grant_type pour renouveler le token

    // Données à envoyer dans la requête pour renouveler le token avec le refresh token
    $data = array(
        'grant_type' => $grantType,
        'client_id' => $clientID,
        'client_secret' => $clientSecret,
        'refresh_token' => $refreshToken // Ajout du refresh_token
    );

    // Encodage des données au format x-www-form-urlencoded
    $dataString = http_build_query($data);

    // Configuration de la requête cURL pour renouveler le token avec le refresh token
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: ' . $contentType
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // Exécution de la requête cURL pour renouveler le token avec le refresh token
    $response = curl_exec($ch);

    // Vérification des erreurs
    if (curl_errno($ch)) {
        echo 'Erreur cURL : ' . curl_error($ch);
    } else {
        echo 'Réponse pour renouveler le token : ' . $response;
        // Decodage de la réponse pour obtenir le nouveau refresh token et access token
        $responseArray = json_decode($response, true);
        $refreshToken = $responseArray['refresh_token'];
        $accessToken = $responseArray['access_token'];
    }

    // Fermeture de la session cURL
    curl_close($ch);
}
// Stockage de l'access token dans une variable pour une utilisation ultérieure
if (!empty($accessToken)) {
    // Mettre à jour la valeur de l'access token dans la variable à chaque renouvellement
    // ou lors de la première obtention du token initial
    $access_token = $accessToken;
}
    
// Utilisation de l'access token pour effectuer d'autres actions
if (!empty($access_token)) {
    // Utiliser la valeur de $access_token pour effectuer d'autres actions
    // avec l'API en utilisant le token authentifié


    // URL de l'API
    $url = "https://api-gateway.lumiplay.link/mountain_secured/weather/2.0" ; // Remplacer par l'URL de l'API que vous souhaitez appeler

    // Initialisation de la session cURL
    $ch = curl_init($url);

    // Ajout du header "Authorization" avec la valeur "Bearer" suivie de l'access token
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer ' . $access_token
    ));

    // Autres options de la requête cURL...
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Exécution de la requête cURL
    $response = curl_exec($ch);

    // Vérification des erreurs
    if (curl_errno($ch)) {
        echo 'Erreur cURL : ' . curl_error($ch);
    } else {
        echo "<p></p>";
        // echo 'Réponse de l\'API : ' . $response;
        $responseArray = json_decode($response, true);
        echo "<pre>";
        // print_r($responseArray);
        // print_r($responseArray[resorts]);


        foreach ($responseArray as $resort => )
       
        // for ($i ; count($responseArray["resorts"]); $i++) {
        //     var_dump("test");
        // }

        // foreach ($responseArray["resorts"] as $resort) {
        //     var_dump('test');
        //     echo "nom de la station : " . $resort["name"];
        //     echo "temps : " . $resort["weatherSkyInfo"]["data"][1];
        // }

        // function displayResortsData($data) {
            
        //     // Parcours chaque resort dans le tableau
        //     foreach ($data["resorts"] as $resort) {
        //       // Affiche le nom du resort
        //         echo "Nom du resort : " . $resort["name"] . "\n";
        //     }
        //       // Parcours chaque weatherSkyInfo dans le resort
        //     foreach ($resort["weatherSkyInfos"] as $weatherSkyInfo) {
        //          // Affiche le contenu de data dans weatherSkyInfo
        //         echo "Contenu de data dans weatherSkyInfo : " . $weatherSkyInfo["data"][0]["data"] . "\n";
        //     }
        // }
        // displayResortsData($responseArray);



    //     for($i = 0; $i < sizeof($responseArray); $i++){
    //     print_r($responseArray[$i] . '<br>');
    // } 
    echo "</pre>";
    }
    

    // Fermeture de la session cURL
    curl_close($ch);

}

?>

