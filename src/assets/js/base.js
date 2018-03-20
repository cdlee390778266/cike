/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 18:15:06
*/


$(function(){

//弹窗
var p_width=320;  //弹窗宽度
var p_height=240;//弹窗高度
var str='';      //弹窗HTML主体内容 html不能有空格


$('.add').click(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('.i-mesobx').css({'left':left,'top':top});
    $('.msk').css('display','block');
 $('.i-mesobx').css('display','block');
    $('.i-mesclose').click(function(){
         $('.msk').css('display','none');
 $('.i-mesobx').css('display','none');
    })
})












})