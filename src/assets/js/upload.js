/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-20 09:43:15
*/

$(function(){
$('.uinput_group img').click(function(){
$(this).parent().parent().find('input').val('');
})  
$('.uinput_group input').blur(function(){
  if($(this).val()==''){
   $(this).val('请输入');
  }
})
 var show='';
       $('.s_type').click(function(event){
              $('#search_slide').slideToggle('fast');
              event.stopPropagation();
              show=$('#search_slide').css('display');
         })
       $('#search_slide li').click(function(){
                        $('#s_cat').val($(this).html());
                        $('#s_check').html($(this).html());
                        $('#search_slide').css('display','none');
                        })
       $(document).click(function(){
                    if(show=="block"){
                    $('#search_slide').slideUp('fast'); 
                    }
                             })

$('#edit').click(function(){
  $('.msk').css('display','none');
  $(this).html('保存');
})




})