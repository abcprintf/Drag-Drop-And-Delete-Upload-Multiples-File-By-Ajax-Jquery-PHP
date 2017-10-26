$(document).ready(function() {
    $('.file_drag').on('dragover', function() {
        $(this).addClass('file_drag_over');
        return false;
    });

    $('.file_drag').on('dragleave', function() {
        $(this).removeClass('file_drag_over');
        return false;
    });

    $('.file_drag').on('drop', function(e) {
        e.preventDefault();
        $(this).removeClass('file_drag_over');

        var formData = new FormData();
        var files_list = e.originalEvent.dataTransfer.files;

        for (var i = 0; i < files_list.length; i++) {
            formData.append('file[]', files_list[i]);
        }

        $.ajax({
            type: "POST",
            url: "upload.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                $('#uploaded_file').html(data);
            }
        });
    });

    $('#uploaded_file').on('click', '#del-image', function(e) {
        var fileName = $(this).attr("data-info");

        if ($(this).closest("div .col-md-3").remove()) {
            $.ajax({
                type: "POST",
                url: "delete.php",
                data: { file_name: fileName },
                success: function(data) {}
            });
        }
    });
});