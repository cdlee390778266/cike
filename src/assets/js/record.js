/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-16 14:31:06
*/

$(function(){
$('.record-bar span').click(function(){
    $('.record-bar span').click(function(){
        $('.record-bar span').removeClass('active');
         $('.record-bar span').eq($(this).index()).addClass('active');
         $('.table').css('display','none');
         $('.table').eq($(this).index()).css('display','block');
    })
});



})