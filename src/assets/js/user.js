/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 16:29:12
*/

$(function(){
//初始化
$('.mes-box').css('display','none');
$('.mes-box').eq(0).css('display','block');
$('.u-nav div a').removeClass('active');
$('.u-nav div a').eq(0).addClass('active');


$('.u-edit img').click(function(event){
 $(this).parent().find('ul').css('display','block');
  event.stopPropagation();
})
$(document).click(function(){
  $('.u-edit ul').css('display','none');
});

$('.u-edit2 img').click(function(event){
 $(this).parent().find('ul').css('display','block');
  event.stopPropagation();
})
$(document).click(function(){
  $('.u-edit2 ul').css('display','none');
});

$('.up_theme').click(function() {
  $(this).find('img').attr('src','images/que.png');
$('.up-check').css('display','block');
});

//切换
$('.u-nav div').click(function(){
  $('.u-nav div a').removeClass('active');
  $(this).find('a').addClass('active');
  $('.mes-box').css('display','none');
$('.mes-box').eq($(this).index()).css('display','block');
});
$('.care1').click(function(){
  if($(this).attr('src')=='images/careimg1.png'){
    $(this).attr('src','images/careimg2.png');
  }else if($(this).attr('src')=='images/careimg2.png'){
    $(this).attr('src','images/careimg1.png');
  }
});

//点赞 收藏
$('.u-collect').click(function(){
    if($(this).hasClass('u-collect')){
        $(this).removeClass('u-collect');
        $(this).addClass('u-collect1');
    }else{
        $(this).removeClass('u-collect1');
        $(this).addClass('u-collect');
    }
})
$('.u-zam').click(function(){
    if($(this).hasClass('u-zam')){
        $(this).removeClass('u-zam');
        $(this).addClass('u-zam1');
    }else{
        $(this).removeClass('u-zam1');
        $(this).addClass('u-zam');
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
$('.t-del').click(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk1"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" class="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append(str)
    $('.code-error').css({'left':left,'top':top});
    $('.mes-close,.confirm,.cancel').click(function(){
        $('body')[0].removeChild($('.msk1')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    })
})




})