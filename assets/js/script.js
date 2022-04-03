$(function () {
   // variables
   var win = $(this)
   var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
   )
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
   })

   /*----------  navbar position  ----------*/
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
