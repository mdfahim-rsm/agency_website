$('#banner_slidder').slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    speed:200,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.client_01').slick({
    dots: false,
    arrows:true,
    centerMode: true,
    centerPadding: 0,
    infinite: true,
    speed:200,
    prevArrow: '<i class="prev fa-solid fa-angle-left"></i>',
    nextArrow: '<i class="next fa-solid fa-angle-right"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.count').counterUp({
    delay: 10,
    time: 1000
});

          


  
  
          
  
  
          