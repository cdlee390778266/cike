/* 
* @Author: cheng
* @Date:   2015-11-09 15:03:18
* @Last Modified by:   anchen
* @Last Modified time: 2015-11-23 17:13:37
*/

$(function(){
//   $('#userName').focus(function(){
//     if($(this).val()=='请输入邮箱/用户名'){
//       $(this).val('');
//     }
//   })
//   $('#userName').blur(function(){
//    if($(this).val()==''){
//     $(this).val('请输入邮箱/用户名');
//   }
// })
//   $('#pwd').focus(function(){
//     if($(this).val()==''){
//      $('#pwdn1').html('');
//    }
//  })
//   $('#pwd').blur(function(){
//    if($(this).val()==''){
//      $('#pwdn1').html('请输入密码');
//    }
//  })
//   $('#name').focus(function(){
//     if($(this).val()=='昵称'){
//       $(this).val('');
//     }
//   })
//   $('#name').blur(function(){
//    if($(this).val()==''){
//     $(this).val('昵称')
//   }
// })
//   $('#email').focus(function(){
//     if($(this).val()=='请输入邮箱'){
//       $(this).val('');
//     }
//   })
//   $('#email').blur(function(){
//    if($(this).val()==''){
//     $(this).val('请输入邮箱')
//   }
// })
//   $('#l-code').focus(function(){
//     if($(this).val()=='请输入验证码'){
//       $(this).val('');
//     }
//   })
//   $('#l-code').blur(function(){
//    if($(this).val()==''){
//     $(this).val('请输入验证码')
//   }
// })
//发送验证码
var time=120;
var interval=0;
var i=0;
 $('#send,#g-send').css('cursor','pointer');
$('#send').click(function(){
  if($(this).html()=='发送'||$(this).html()=='重新发送'){
    $(this).css('cursor','default');
    $(this).html(time);
    var interval=setInterval(function(){
     i=parseInt($('#send').html());
     i--;
     if(i<=115){
      clearInterval(interval);
      $('#send').html('重新发送');
      $('#send').css('cursor','pointer');
    }else{
      $('#send').html(i)
    } 
  }, 1000);
  }
})
$('#g-send').click(function(){
  if($(this).html()=='发送'||$(this).html()=='重新发送'){
    $(this).css('cursor','default');
    $(this).html(time);
    var interval=setInterval(function(){
     i=parseInt($('#g-send').html());
     i--;
     if(i<=115){
      clearInterval(interval);
      $('#g-send').html('重新发送');
      $('#g-send').css('cursor','pointer');
    }else{
      $('#g-send').html(i)
    } 
  }, 1000);
  }
})
//忘记密码
//  $('#g-email').focus(function(){
//     if($(this).val()=='请输入邮箱'){
//       $(this).val('');
//     }
//   })
//   $('#g-email').blur(function(){
//    if($(this).val()==''){
//     $(this).val('请输入邮箱');
//   }
// })
//  $('#g-code').focus(function(){
//     if($(this).val()=='请输入验证码'){
//       $(this).val('');
//     }
//   })
//   $('#g-code').blur(function(){
//    if($(this).val()==''){
//     $(this).val('请输入验证码');
//   }
// })
 //弹窗
var p_width=320;  //弹窗宽度
var p_height=200;//弹窗高度
var str='<p class="mt20"><img src="images/suc1.png" alt="" class="mr10" />修改成功，请牢记登录密码</p><p class="mt40"><span class="confirm1">确定</span></p>';      //弹窗HTML主体内容 html不能有空格

$('.login-bg1').submit(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" id="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append(str)
    $('.code-error').css({'left':left,'top':top});
    $('#mes-close,.confirm1').click(function(){
        $('body')[0].removeChild($('.msk')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    });
    return false;
})

$('#g-code').blur(function(){
    var left=($(window).width()-p_width)/2;
    var top=($(window).height()-p_height)/2+$(window).scrollTop();
    $('body').append('<div class="msk"></div>');
    $('body').append('<div class="code-error"><div class="c-close tright"><img src="images/close.png"  alt="" id="mes-close" /></div> <div class="c-main"></div></div>');

    $('.c-main').append('<p class="mt40">验证码错误，请重新输入</p>')
    $('.code-error').css({'left':left,'top':top});
    $('#mes-close,.confirm1').click(function(){
        $('body')[0].removeChild($('.msk')[0]);
        $('body')[0].removeChild($('.code-error')[0]);
    });
    return false;
})





})
