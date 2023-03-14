/* Nav bar hover effect + ChartJS movement */
$(document).ready(function () {
  $("nav").hover(function () {
    $("nav").toggleClass("expand");
  });
});

function fixTitle() {
  $("section.affix").each(function () {
    var $this = $(this);
    var offset = $this.offset().top;
    var scrollTop = $(window).scrollTop();

    if (scrollTop > offset) {
      $this.addClass("fixed");
    } else {
      $this.removeClass("fixed");
    }
  });
}

/* SCROLL FIX TITLE */

$(document).ready(function () {
  $(window).scroll(fixTitle);
});

/* SLIDE SHOW */
