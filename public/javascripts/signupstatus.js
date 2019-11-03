// Open or Close Menu
let toggleNav = function() {
    $(".navbar").toggleClass("navbar-hide");
    $(".content").toggleClass("content-grow");
    $(".content").toggleClass("content-darken");
  };
  
  // Check or Uncheck Checkbox
  let checkCheckbox = function() {
    
  };
  
  // Window Sizing
  let mediaqueries = function(resize) {
    //MEDIA QUERY
    let small = window.matchMedia("(max-width: 1024px)");
    let large = window.matchMedia("(min-width: 1025px)");
  
    // If screen is bigger than 1024px
    if (large.matches) {
      $(".navbar").removeClass("navbar-hide");
      $(".content").removeClass("content-grow");
      $(".content").removeClass("content-darken");
       
    }
    //If screen is equal or smaller than 1024px
    if (small.matches) {
      $(".content").addClass("content-darken");
  
      checkCheckbox();
    }
  
    // Always Open Menu on Resize - testing purposes
    if (resize) {
      $(".navbar").removeClass("navbar-hide");
      $(".content").removeClass("content-grow");
       
      if (large.matches) {
        $(".content").removeClass("content-darken");
      } else if (small.matches) {
        $(".content").addClass("content-darken");
      }
    }
  };
  
  //Button was clicked
  $(".button__menu").click(() => {
    toggleNav();
  });
  
  //Click Darkened Content
  $(document).click(e => {
    let dark = $(e.target).hasClass("content-darken");
    if (dark) {
      //Close Nav
      toggleNav();
      // Uncheck Checkbox/Button
      checkCheckbox();
    }
  });
  
  window.onload = mediaqueries;
  
  window.onresize = function(event) {
    mediaqueries(true);
  };
  