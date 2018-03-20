/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-13 16:39:09
*/

$(function(){

$('.u-edit2 img').click(function(event){
 $(this).parent().find('ul').css('display','block');
  event.stopPropagation();
})
$(document).click(function(){
  $('.u-edit2 ul').css('display','none');
});
$('.zam,.care').click(function(){
 if($(this).hasClass('active')){
  $(this).removeClass('active');
}else{
 $(this).addClass('active');
}
})
//弹窗
var errorw=parseInt($('.code-error').css('width'));
var errorh=parseInt($('.code-error').css('height'));
var top=(parseInt($(window).height())-errorh)/2;
var left=(parseInt($(window).width())-errorw)/2;
  $('.code-error').css({'left':left,'top':top});
$(window).resize(function(){
  var top=(parseInt($(window).height())-errorh)/2;
var left=(parseInt($(window).width())-errorw)/2;
  $('.code-error').css({'left':left,'top':top});
});
$('#cclose,.c-main a').click(function(){
  $('.code-error').hide();
   $('.msk').hide();
    $('body').css('overflow','visible');
})
$('.themes-del').click(function(){
  var top=(parseInt($(window).height())-errorh)/2+$(document).scrollTop();
var left=(parseInt($(window).width())-errorw)/2;
  $('.code-error').css({'left':left,'top':top});
   $('.code-error').show();
   $('.msk').show();
    $('body').css('overflow','hidden');
});
//编辑
$('#ud-edt').click(function(){
 $(this).removeClass('ud-edit');
 $(this).addClass('ud-editc').html('保存');
 $('.msk').css('display','none');
})


})





