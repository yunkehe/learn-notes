<?php 

    $connect = mysqli_connect('localhost:3306', 'root', 'root');

    if( $connect ){
        echo "success";
    }else{
        echo "fail!";
    }


 ?>