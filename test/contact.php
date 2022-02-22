<?php
if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'tuyijeremie2000@gmail.com';
    $subject = "New Information";
    $body = '<html>
                <body>
                    <p> Name: '.$name.'  </p> </br>
                    <p> Email: '.$email.' </br> </p> </br>
                    <p> Message: </br> '.$message.' </br> </p>
                </body>
             </html>';


    $headers = "From: ".$name." <".$email. ">\r\n";
    $headers .= "Reply-To: ".$email."\r\n"; 
    $headers .= "MINE-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8"
    $send = mail($to, $subject , $body, $headers);
    if($send){
        echo '<br>';
        echo 'Thank for contacting US!'
    }else{
        echo 'error';
    }
}
?>