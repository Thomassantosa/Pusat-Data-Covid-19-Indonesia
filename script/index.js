$(document).ready(function() {
    //Membuat Background Image berganti Tiap 5 detik
    var i = 0;
    var img = ["photo1-01.jpg", "photo2-01.jpg", "photo3-01.jpg", "photo5-01.jpg"];
   /*
        menulis array atau bisa dengan
        var img = [ ]
   */

   function ubahBackgroundImage() {
        $('.banner').css("background-image", "url(./images/" + img[i] + ")" ); 
        i++;

        
        if(i == img.length) {
            i = 0;
        }
        
        setTimeout(ubahBackgroundImage, 5000);
    }
   
    ubahBackgroundImage();
});