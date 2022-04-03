$(function () {
   // variables
   var win = $(this)

   /*----------  navbar behavior  ----------*/
   // First windows size check
   if (win.width() > 576) {
      // add class to navbar
      $(".navbar").addClass("fixed-top")
   }

   // Media Query windows resize sm(576px)
   $(window).on("resize", function () {
      if (win.width() > 576) {
         // add class to navbar
         $(".navbar").addClass("fixed-top")
      } else {
         // remove class to navbar
         $(".navbar").removeClass("fixed-top")
      }
   })
})
