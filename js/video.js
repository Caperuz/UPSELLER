$(document).ready(function(){
    var url = $("#homeVideo").attr('src');
    $("#myModal").on('hide.bs.modal', function(){
        $("#homeVideo").attr('src', '');
    });
    $("#myModal").on('show.bs.modal', function(){
        $("#homeVideo").attr('src', url);
    });
});