$(function() {
  // Toggle open
  $(".sideNav .drp").on("click", function(e) {
    $(this)
      .find(".dropDown")
      .slideToggle();
    $(this)
      .siblings()
      .find(".dropDown")
      .slideUp();
    $(this)
      .find("i")
      .toggleClass("open");
    $(this)
      .siblings()
      .find("i")
      .removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".menuTriger").fadeIn();
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
    }
  });

  // Main Slider
  $(".main-slider > .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    navText: [
      "<span><i class='fas fa-chevron-right'></i></span>",
      "<span><i class='fas fa-chevron-left'></i></span>"
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    mouseDrag: false
  });

  // clients Slider
  [...document.querySelectorAll(".products-Tabs .owl-carousel")].forEach(el => {
    $(el).owlCarousel({
      // autoplay: true,
      rtl: true,
      loop: true,
      nav: true,  
      items: 5,
      // dots: false,
      margin: 12,
      // smartSpeed: 1000,
      responsive: {
        0: {
          items: 2,
          stagePadding: -20,
          margin: 8
        },
        600: {
          items: 3
        },
        768: {
          items: 4,
          dots: true
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5
        }
      },
      navText: [
        "<i class='fas fa-chevron-right'></i>",
        "<i class='fas fa-chevron-left'></i>"
      ]
    });
  })

  $('.proTabs a').on('shown.bs.tab', function (e) {
    let $owl = $(".products-Tabs .owl-carousel");
    $owl.trigger('refresh.owl.carousel');
  })
  // $(".products-Tabs .owl-carousel").owlCarousel({
  //   // autoplay: true,
  //   rtl: true,
  //   loop: true,
  //   nav: true,
  //   items: 5,
  //   dots: false,
  //   margin: 12,
  //   // smartSpeed: 1000,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 3
  //     },
  //     992: {
  //       items: 5
  //     }
  //   },
  //   navText: [
  //     "<span><i class='fas fa-chevron-right'></i></span>",
  //     "<span><i class='fas fa-chevron-left'></i></span>"
  //   ]
  // });

  // My Slider inner Slider
  if ($(window).width() >= 768 && $(window).width() <= 1200){
    $(".categories .content").addClass("owl-carousel");
    $(".categories .owl-carousel").owlCarousel({
        // autoplay: true,
        rtl: true,
        loop: true,
        items: 5,
        dots: true,
        margin: 12,
        // smartSpeed: 1000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        },
        navText: [
          "<span><i class='fas fa-chevron-right'></i></span>",
          "<span><i class='fas fa-chevron-left'></i></span>"
        ]
      });
  }

  // Product Counting
  $("button.plus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    $(this)
      .parent()
      .find(".quantity")
      .val(newValue + 1);
  });

  $("button.minus").click(function(e) {
    e.preventDefault();
    var newValue = parseFloat(
      $(this)
        .parent()
        .find(".quantity")
        .val()
    );
    if (newValue <= 1) {
    } else {
      $(this)
        .parent()
        .find(".quantity")
        .val(newValue - 1);
    }
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button, .newsletter > button").attr("data-toggle", "collapse");
  }

  $(".foot-links button, .newsletter > button").on("click", function() {
    $(this).toggleClass("trans");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".collapse")
      .collapse("hide");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find("button")
      .removeClass("trans");
  });

  // Header Stars
  for (let i = 0; i < 29; i++) {
    $("header .snow").append("<span></span>");
  }

  [...document.querySelectorAll("header .snow span")].forEach(el => {
    let dimensions = Math.floor(Math.random() * 3) + 3;
    let poseX = Math.floor(Math.random() * 100);
    let poseY = Math.floor(Math.random() * 100);
    let transion = Math.random() + 0.6;
    $(el).css({
      width: dimensions,
      height: dimensions,
      display: "inline-block",
      backgroundColor: "#FFF",
      borderRadius: "50%",
      position: "absolute",
      left: poseX + "%",
      top: poseY + "%",
      transition: transion + "s",
      animation: `puls ${transion}s infinite`
    });
  });
  // Header Stars

  // Tabs
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  try {
    // Map
    var x = 0;
    var locations = [
        ['الرياض', 24.6764335,46.6721885, ++x],
        ['العيينه', 24.5093321,44.3405598, ++x],
        ['الدوادمي', 24.7093321,49.3405598, ++x],
        ['الدمام', 24.1093321,40.3405598, ++x],
        ['الرسّ', 22.5093321,44.3405598, ++x],
    ];
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(24.75,46.68),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: '../images/pin.png',
        map: map
      });
    }
  } catch (error) {
    
  }

  // Animation On Scroll
  AOS.init();

});