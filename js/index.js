
/*top버튼 위로*/

$(window).scroll(function(){       
  if($(this).scrollTop()>300){
      $(".top").fadeIn();
  }else{
      $(".top").fadeOut();
  }
});

$(".top").click(function(){
  $("html,body").animate({scrollTop:"0"});
  return false;
});


$(window).scroll(function(){
  $("#ttt").text($(this).scrollTop());
});


  /* 프로젝트1 상세보기 */ 
$(".project_detail1").click(function(){
  if($(this).children('.more_btn').hasClass('on')){
    $(this).children('.more_btn').removeClass('on');
    $(this).children('.more_btn').addClass('on1');
  }else{
    $(this).children('.more_btn').removeClass('on1');
    $(this).children('.more_btn').addClass('on');
  }
  $(this).siblings('.project_detail_content_area1').slideToggle(300);
 

})

$(".project_detail_content1>li:not(:first)").hide();

$(".project_detail_header1>li").click(function(){
  $(".project_detail_header1>li").removeClass('on');
  $(this).addClass('on');
  $(".project_detail_content1>li").hide();
  $($(this).find("a").attr("href")).show();
})




/* 프로젝트2 상세보기 */ 
$(".project_detail2").click(function(){
  if($(this).children('.more_btn').hasClass('on')){
    $(this).children('.more_btn').removeClass('on');
    $(this).children('.more_btn').addClass('on1');
  }else{
    $(this).children('.more_btn').removeClass('on1');
    $(this).children('.more_btn').addClass('on');
  }

  $(this).siblings('.project_detail_content_area2').slideToggle(400);
})

$(".project_detail_content2>li:not(:first)").hide();

$(".project_detail_header2>li").click(function(){
  $(".project_detail_header2>li").removeClass('on');
  $(this).addClass('on');
  $(".project_detail_content2>li").hide();
  $($(this).find("a").attr("href")).show();
})



//

$(".header_in .li1").click(function(){
  $("body,html").animate({scrollTop:"640px"},700);
});
$(".header_in .li2").click(function(){
  $("body,html").animate({scrollTop:"1370px"},700);
});
$(".header_in .li3").click(function(){
  $("body,html").animate({scrollTop:"3050px"},700);
});

