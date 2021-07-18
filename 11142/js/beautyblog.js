 $(document).ready(function () {
     $(window).load(function () {

         $('#myTab a').click(function (e) {
             e.preventDefault()
             $(this).tab('show')
         })
     });

     $(window).load(function () {
         var boxheight = $('#myCarousel .carousel-inner').innerHeight();
         var itemlength = $('#myCarousel .item').length;
         var triggerheight = Math.round(boxheight / itemlength + 1);
         $('#myCarousel .list-group-item').outerHeight(triggerheight);
     });

     $(window).load(function () {

         var monthNames = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"
         ];
         var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

         var newDate = new Date();
         newDate.setDate(newDate.getDate() + 1);
         $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
     });

  

     //script for smooth scrolling
     jQuery(document).ready(function ($) {
         $(".scroll ").click(function (event) {
             event.preventDefault();

             $('html,body').animate({
                 scrollTop: $(this.hash).offset().top
             }, 1000);
         });
     });
     //script  for  ease
     $(document).ready(function () {
         /*
          var defaults = {
         	 containerID: 'toTop', // fading element id
         	 containerHoverID: 'toTopHover', // fading element hover id
         	 scrollSpeed: 1200,
         	 easingType: 'linear' 
          };
          */

         $().UItoTop({
             easingType: 'easeOutQuart'
         });

     });
 });