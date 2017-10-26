<?php
    if(isset($_POST)){
        $file_name = $_POST['file_name'];
        if(unlink("uploads/".$file_name)){
            echo 'success';
        }else{
            echo 'fail';
        }
    }
?>