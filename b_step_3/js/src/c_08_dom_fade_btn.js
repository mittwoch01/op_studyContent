// c_08_dom_fade_btn.js

// .card를 클릭시 각각 필요한 기능으로 모달창이 나타나게 만들기
// 1. setInterval 이용하여, opacity로 처리되게 만들기
// 2. setTimeout 이용하여, opacity로 처리되게 만들기
// 3. css-transition 이용하여, opacity로 처리되게 만들기

// 순서체크
// 1. .card 내부에 있는 a 클릭시 > .new_area_modal(이하 모달)을 나타나게 만들기
// 2. a는 기본기능이 페이지 이동이다. > preventfault();
// 3. 모달기능이 처리되기 : display:block과 동시에 opacity:0; 서서히 opacity:1;로 변경되게 처리한다.


var newBox = document.getElementById('newBox');
var card   = document.getElementsByClassName('card');
var modal  = document.getElementsByClassName('new_area_modal')[0];
var closeBtnPart = modal.getElementsByClassName('close_btn')[0];
var closeBtn = closeBtnPart.children[0]; // 닫기 버튼

// 공통함수
// displayFn : 상황에 맞게 display:block or display:none; 처리하는 함수
var displayFn = function(view){
  var displayCheck = view || false;
  console.log(displayCheck);
  if(!displayCheck){
    modal.style.display = 'block';
    modal.style.opacity = 0;
  }else{
    modal.style = null;
    modal.style.display = 'none';
  }
};

// ======================================================================
// 방법 1
var intervalBtn = card[0];

// 함수
var intervalFn = function(){
  var value = 0, interval ;
  interval = setInterval(function(){
    value += 1;
    // if(value <= 1){
    //   modal.style.opacity = value;
    // }else{
    //   // return;
    //   clearInterval( interval );
    // }

    value <= 100? modal.style.opacity = value / 100: clearInterval( interval );
  }, 1);
};

// 이벤트 수행
intervalBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  intervalFn();
});
// ======================================================================
// 방법2
var timeoutBtn = card[1];

// 함수
var opValue = 0;

var timeoutFn = function(){
  opValue += 1; //opValue++와 같음.

  setTimeout(function(){
    modal.style.opacity = opValue + '%';
    if(opValue <= 100){
      timeoutFn();
    }
  }, 1);

};

// 이벤트 수행
timeoutBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  timeoutFn();
});

// ======================================================================
// 방법3
// css-transition 
var cssBtn = card[2];

// 함수
var cssTransitionFn = function(timed){
  var timed = timed || 500;
  // modal.style.transitionProperty = 'opacity';
  // modal.style.transitionDuration = '500ms';
  // modal.style.transitionTimingFunction = 'linear';
  modal.style.transition = 'opacity '+ timed +'ms linear';
  setTimeout(function(){
    modal.style.opacity = 1;
  },1);
};


// 이벤트 수행
cssBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  cssTransitionFn(300);
});


// ===========================================================
// 닫기 버튼 수행

// 함수
var intervalHideFn = function(){
  var style = modal.style;
  var value = style.opacity * 100 ;
  var interval;

  interval = setInterval(function(){
    value -= 1;
    if(value >= 0){
      style.opacity =value / 100;
    }else{
      clearInterval( interval );
      displayFn(true);
    }
  }, 1);

};

// 이벤트 ------------------------------------------------------------------ 

closeBtn.addEventListener('click', function(event){
  event.preventDefault();
  intervalHideFn();
});

// 이슈 : css-transition 기능으로 나타난 효과는 사라질때 갑자기 사라지는 효과가 있으므로,
// opacity가 1이 된 이후에는 css-transition기능을 강제로 삭제처리해야함
// ==================================================