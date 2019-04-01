$(document).ready(function(){
    $('.menu ul li a').click(function(){
      $('li a').removeClass("menu-activado");
      $(this).addClass("menu-activado");
  });
});