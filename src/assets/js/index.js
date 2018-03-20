/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-19 13:49:28
*/


$(function(){
//初始化
$('.i-main').hide();
$('.i-main').eq(0).show();

$('#ad-close').click(function(){
 $(this).parent().find('a').hide();
});
$('header ul li').click(function(){
 $('header ul li').find('a').removeClass('active'); 
 $('header ul li').find('a').eq($(this).index()).addClass('active'); 
 $('.i-main').hide();
 $('.i-main').eq($(this).index()).show();

})

$('.zam,.care').click(function(){
 if($(this).hasClass('active')){
  $(this).removeClass('active');
}else{
 $(this).addClass('active');
}
})

//日历弹窗
$('#beginTime').date();

//只为测试用
$('.h-icon2').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
})




})