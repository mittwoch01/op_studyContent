(function($){
  //console.log( $.fn );
  // $('선택자') VS document.querySelector('선택자')

  var nt = $('next');
  var slideWrap = $('.slide_con_wrap');
  var div = slideWrap.chlidren('div');
  var i = 0;
  // js는 0이 첫번째를 가리킨다!

  //버튼을 클릭할때마다 div의 i번째에 내용이 나타나게!!
  nt.click(function(){
    i += 1; 
    //1씩 더해보겠다.

    if(i >=5){i = 0;}
    //i가 5보다 크거나 같으면 i를 0으로 다시설정

    div.eq(i).siblings().removeClass('action');
    //div중 i번째를 제외한 다른 형제는 모두 숨겨라

    div.eq(i).addclass('action');
    //div중에 i번째는 나타나게 해라

  });

})(jQuery);