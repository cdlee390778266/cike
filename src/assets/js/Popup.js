/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 16:08:10
*/

$(function(){
 //弹窗
var p_width=320;  //弹窗宽度
var p_height=200;//弹窗高度
var str='';      //弹窗HTML主体内容 html不能有空格

// $(window).resize(function(){
//  var left=($(window).width()-p_width)/2;
//  var top=($(window).height()-p_height)/2+$(window).scrollTop();
//  $('.code-error').css({'left':left,'top':top});
// })
$('.t-del').click(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" id="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append(str)
    $('.code-error').css({'left':left,'top':top});
    $('#mes-close').click(function(){
        $('body')[0].removeChild($('.msk')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    })
    alert($('.msk')[0].tagName)
})




























})