$(document).ready(function(){
    $(".editingtoffle").click(function(){
      $(".menu").toggleClass("tryingtoedit");
    });
    $(".menu ul li").click(function(){
      $("div").toggleClass("itsworking");
    });
    $(".editingtoffle").click(function(){
      $(".editingtoffle").toggleClass("changingcross");
    });
    $(window).scroll(function() 
    {
    if ($(this).scrollTop() > 1)
    {
      $('#header').addClass("stickyheader");
    }
    else
    {
      $('#header').removeClass("stickyheader");
    }
    });
  });