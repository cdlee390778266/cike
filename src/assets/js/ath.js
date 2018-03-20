/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 17:00:27
*/

$(function(){
// $('.msk').css('display','none');
// $('.code-error').css('display','none');

 $('.autype span').click(function(){
 $('.autype span').removeClass('ay1');
  $('.autype span').eq($(this).index()).addClass('ay1');
  $('form').css('display','none');
  $('form').eq($(this).index()).css('display','block');
 })
// $('form').submit(function(){
//     $('.msk').css('display','block');
//     $('.code-error').css('display','block');
//     return false;
// })
$('#cclose,.a1-style2').click(function(){
$('.msk').css('display','none');
$('.code-error').css('display','none');

})

 //弹窗
var p_width=320;  //弹窗宽度
var p_height=200;//弹窗高度
var str='<p class="mt20">提交成功，将于3个工作日内审核完成，请耐心等待</p><p class="mt40"><span class="confirm1">确定</span></p>';      //弹窗HTML主体内容 html不能有空格

// $(window).resize(function(){
//  var left=($(window).width()-p_width)/2;
//  var top=($(window).height()-p_height)/2+$(window).scrollTop();
//  $('.code-error').css({'left':left,'top':top});
// })
$('form').submit(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" id="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append(str)
    $('.code-error').css({'left':left,'top':top});
    $('#mes-close,.confirm1').click(function(){
        $('body')[0].removeChild($('.msk')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    })
    return false;
})




})