<?php
    $i = 0;
    $output = '';
    if(isset($_FILES['file']['name'][0])) {
        foreach($_FILES['file']['name'] as $keys => $values) {
            $i++;
            $file_name = $_FILES['file']['name'][$keys];
            $file_tmp = $_FILES['file']['tmp_name'][$keys];

            move_uploaded_file($file_tmp,"uploads/".$file_name);

            $output .= '<div class="col-md-3">';
            $output .= '<div class="thumbnail none-border text-center">';
            $output .= '<img src="uploads/'.$file_name.'" class="img-thumbnail img-responsive" style="width: 150px;">';
            $output .= '<a href="#" id="del-image" data-info="'.$file_name.'" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></a>';
            $output .= '</div>';
            $output .= '</div>';
        }
    }
    echo $output;
?>