
  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'media/webs.mp3');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

     $('#link_black').click(function() {
       audioElement.play();

   });


      $('.pro_box').click(function() {
       audioElement.play();

   });

       $('#botgnws').click(function() {
       audioElement.play();

   });

});