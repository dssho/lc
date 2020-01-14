$(function(){
  $.ajax({
    url:"head.html",
    type:"get",
    success:function(result){
      $("#header").replaceWith(result)
      $(`<link rel="stylesheet" href="./css/head.css"/>`).appendTo("head");
      var inp=document.getElementById("dianji");
    dianji.onfocus=function(){
      var ser=document.getElementById("sear_pro");
      ser.style.display="block";
    }
    dianji.onblur=function(){
      var ser=document.getElementById("sear_pro");
      ser.style.display="none";
    }
    }
  })
})