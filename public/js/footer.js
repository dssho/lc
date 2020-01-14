$(function(){
  $.ajax({
    url:"foot.html",
    type:"get",
    success:function(result){
      $("#footer").replaceWith(result)
      $(`<link rel="stylesheet" href="./css/foot.css"/>`).appendTo("footer");
    }
  })
})