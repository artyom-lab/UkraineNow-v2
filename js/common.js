$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
  e.stopPropagation();
  });

  Waves.attach('.btn-donate');
  Waves.attach('.btn',  ['waves-light']);
  Waves.init();

//   $(document).on('click', '.owl-item', function(e) {
//   const carousel = $('.owl-carousel').data('owl.carousel');
//   carousel.to(carousel.relative($(this).index()), false, true);
// });

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: "true",
  speed: 1000,
  // cssMode: "true",
  fade: "true", 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    1200: {
      allowTouchMove: false,
    },
  },
});

  var popupTimer;
  function delayPopup(popup) {
    popupTimer = setTimeout(function() { $(popup).popover('hide') }, 4000);
  };
  $('.copy').click(function () {
    clearTimeout(popupTimer);
    $(".popover").popover('hide');
    var $input = $(this).parents('.copy-box').find('.copy-text');
    /* Select the text field */
    $input.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    $(this)
      .popover({
        title    : 'Successfully copied!',
        // content  : false,
      })
      .popover('show')
    ;
    // Hide popup after 4 seconds
    delayPopup(this);
  });

$(".scroll-to").mPageScroll2id({
  scrollSpeed: 900,
}); 

autosize();
function autosize(){
    var text = $('.autosize');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}

});




