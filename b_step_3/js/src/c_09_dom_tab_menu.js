// c_09_dom_tab_menu.js

// vanila.js
// 현재 별도의 기능없이 직접 하드코딩으로 짜는 가장 기본형 js

// 시나리오
// * 탭메뉴를 클릭아혀, 해당하는 순번에 맞는 내용을 나타나게 만들기
// 1. .tab_title_inner내부에 있는 li(button)을 클릭하여, 순서를 파악한다.
// 2. .tab_content_inner내부에 있는 .tab_content_part를 나타나게 한다.
// 3. display처리를 해도 되지만, 해당하는 순번에 (li와, .tab_content_part) 각각 .on을 첨부한다.
// 4. 선택되지 않은 요소는 .on의 선택 해제
// - button/a 기본으로 가지고 있는 요소에 기능은 클릭시 처리에 방해되므로 기능을 해제

// =========================================
// 기본 변수
var contentBox = document.querySelector('#contentBox');
var titleInner = contentBox.querySelector('.tab_title_inner');
var titleInnerPart = titleInner.querySelector('ul');
// var titleList = titleInnerPart.querySelectorAll('li');
var titleList = titleInnerPart.children;
var titleArr = [].slice.call(titleList);
// titleArr.forEach(function(selector, index){ console.log( selector )})

var contentInner = contentBox.querySelector('.tab_content_inner');
var contentPart = contentInner.querySelectorAll('.tab_content_part');
var indexCheck = 0;
var optionName = 'on';
// ===========================================
// 기본 추가기능 
titleArr[indexCheck].classList.add(optionName);
contentPart[indexCheck].classList.add(optionName); 
// ===========================================
// 함수
// ===========================================
// 이벤트처리
titleArr.forEach(function(element, index){
  // li 내부 버튼선택
  var titleBtn = element.querySelector('button');
  titleBtn.addEventListener('click', function(event){
    event.preventDefault();
  /*
    // console.log( this ); // 선택된 요소
    // 선택된 요소의 부모 요소를 찾아오려면 : parentNode
    // console.log( this.parentNode );
    // 이미, forEach에서 li들중 하나를 이벤트로 발생하여 처리했기에 
    // console.log( element );
    // console.log( index );
  */
 /*
    // -------------------------------------------------
    // 아래 question 3-1 :
    titleArr[indexCheck].classList.remove(optionName);
    contentPart[indexCheck].classList.remove(optionName); 
    // -------------------------------------------------
    indexCheck = index;
    titleArr[indexCheck].classList.add(optionName);
    contentPart[indexCheck].classList.add(optionName);
    */

    /*
    // 아래 question 3-2; - li요소에 전부 on제거
    titleArr.forEach(function(el){ el.classList.remove(optionName); });
    contentPart.forEach(function(el){ el.classList.remove(optionNAme); });
    // ---------------------------------------------------------------------
    indexCheck = index;
    titleArr.forEach(function(el){ el.classList.remove(optionName); });
    contentPart.forEach(function(el){ el.classList.remove(optionNAme); });
    */

    // 아래 question 3-3; - li 순번에 맞는것은 add , 아닌것 모두 (for) remove 처리
    // 선택된 것, 선택되지 않은 것을 구분
    indexCheck = index;
    titleArr.forEach(function(el, idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName) ;     
    }); // titleArr.forEach
    contentPart.forEach(function(el, idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName) ;     
    }); // contentPart.forEach




  });
});


// Question ---------------------------------
// 1. titleBtn.addEventListener('click', function(){ ...  console.log( 클릭한 순번 ) });
// 2. 순번에 맞는 요소에 class='on'을 첨부
// 3. 기존에 있는 'on'을 제거
// 3-1. 기존의 순번을 파악해서 제거
// 3-2. 모든(for) 요소에 있는 'on'을 제거 후 'on'을 삽입
// 3-3. 선택순번만 'on' 첨부, 선택순번 외 모든 요소에 'on' 제거