// c_01_dom_sample_01.js

// 시작전에 시나리오를 작성해라.

// 1. 버튼을 클릭한다. > 메뉴가 나타난다.
// 2. 버튼을 클릭한다. > 메뉴가 사라진다.

// ---------------------------------------
// 1. 버튼을 클릭한다. > 메뉴가 나타난다.               // document.getElementsByClassName('navbarSupportContent');
// 1-1. 버튼 : .navbar-togger > var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2. 클릭 : 선택자 클릭( add Event Listener ) > navToggleBtn.addEventListener('click', function(event){});

// 1-3. 메뉴 : id = "navbarSupportedContent" > document.querySelector('#navbarSupportedContent');
// 1-4. 나타나기(어떻게?) - html.classname = "action" : class이름 추가(?) + (display:none > block)
// 1-5. 기능을 수행하기 전 체크 : 
    // 해당버튼의 고유기능 해제( event.preventDefult(); )
    // action의 유무 : classList.contains("action")



var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');


navToggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';
  // 1-5 사전기능 처리 :
  var isAction = navbarSupportedContent.classList.contains( "action" );
  // 1-4. 수행한다.
  if(!isAction){
    navbarSupportedContent.classList.add( checkClassName );
  }else{
    navbarSupportedContent.classList.remove( checkClassName );
  }
});

// var box = document.querySelector('.box');
// var boxBtn = box.querySelector('a');
// boxBtn.addEventListener('click', function(event){
//   event.preventDefault(); // 고유기능을 사전에 예방하여 default 처리 해버리는 것
//   console.log( event );
// });

// ----------------------------------------------------------------------
// jQuery 코드로 작성시
/*
var navToggleBtn = $('.navbar-toggler');
var navbarSupportedContent = $('#navbarSupportedContent');
navToggleBtn.on('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';
  // 1-5 사전기능 처리 : 
  var isAction = navbarSupportedContent.hasClass(checkClassName);
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.addClass(checkClassName);
  }else{
    navbarSupportedContent.removeClass(checkClassName);
  }
});
*/