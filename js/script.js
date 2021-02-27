document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var slider = document.querySelectorAll('.slider');
    var parallax = document.querySelectorAll('.parallax');
    var materialBox = document.querySelectorAll('.materialboxed');
    var scrollspy = document.querySelectorAll('.scrollspy');
    M.Sidenav.init(sidenav);
    M.Slider.init(slider , {
        indicators: false,
        height: 500,
        duration: 600,
       interval: 3000 
    });
    M.Parallax.init(parallax);
    M.Materialbox.init(materialBox);
    M.ScrollSpy.init(scrollspy, {
      scrollOffset: 50,
      
    });
  });