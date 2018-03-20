/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 16:34:40
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
var p_width=320;  //弹窗宽度
var p_height=200;//弹窗高度
var str='<p class="mt20">确定删除该照片？</p><p class="mt40"><span class="confirm">确定</span ><span class="cancel">取消</span></p>';      //弹窗HTML主体内容 html不能有空格

// $(window).resize(function(){
//  var left=($(window).width()-p_width)/2;
//  var top=($(window).height()-p_height)/2+$(window).scrollTop();
//  $('.code-error').css({'left':left,'top':top});
// })
$('.themes-del').click(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" class="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append(str)
    $('.code-error').css({'left':left,'top':top});
    $('.mes-close,.confirm,.cancel').click(function(){
        $('body')[0].removeChild($('.msk')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    })
})


//关注
$('.thmees-care img').click(function(){
  if($(this).attr('src')=='images/careimg1.png'){
    $(this).attr('src','images/careimg2.png');
  }else{
      $(this).attr('src','images/careimg1.png');
  }
})


})





