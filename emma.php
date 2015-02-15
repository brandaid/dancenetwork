<?php
// Authentication Variables
$account_id = "1747938";
$public_api_key = "6511b3f643fc9d9448be";
$private_api_key = "8cb80d456e571ba19527";

// Form variable(s)
$email = $_POST['email'];
$name = $_POST['name'];
$dance = $_POST['dance'];
$groups = array(1892322);

// Member data other than email should be passed in an array called "fields"
$member_data = array(
    "email" => $email,
    "fields" => array(
    "name" => $name,
    "dance" => $dance,
    ),
   "group_ids" => $groups
);

// Set URL
$url = "https://api.e2ma.net/".$account_id."/members/add";

// Open connection
$ch = curl_init();

// Set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_USERPWD, $public_api_key . ":" . $private_api_key);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($member_data));
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($member_data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$head = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

//execute post
if($http_code > 200) {
    $app_message = "Error sending subscription request";
    print_r($head);
} else {
    print_r($head);
    $app_message = "Success!";
}

//echo $app_message;
?>
