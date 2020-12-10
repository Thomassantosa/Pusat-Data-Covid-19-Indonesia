$(document).ready(function(){

    $('.komentar').hide();
    
    $(".submit").click(function(){

        var judul = document.getElementById("judul").value;
        var keterangan = document.getElementById("keterangan").value;
        $(".display-post").html("<div class='post-container'><div class='post'><h1>" + judul +"</h1><p class='ket'>" + keterangan + "</p><p class='tanggal'><span class='dot'></span>9 Desember 2020</p><p class='icon'><img src='images/like.png' width='30'></p><p class='icon comment'><img src='images/comment.png' width='30'></p><p class='icon share'><img src='images/share.png' width='30'></p></div></div>");
        alert("Postingan Berhasil Diunggah");
    });

    $("#show-comment").click(function(){
        $('.komentar').toggle(1000);
    });
});