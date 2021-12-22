// e_04_slide_area_touch.js

// ============================
/** 전체 시나리오
 * 1. 터치 기반의 형식으로 광고 슬라이드 제작
 * 2. 마우스 기반의 드래그 형식의 슬라이드 제작
 * 2. slide 광곡 틀 제작(json형식의 외부데이터 불러오기)
 */
// ============================
/** 
 * 외부 데이터 불러와서 적용 (html - 임시)
 */
// ============================
// ============================

const path = "../temp/slide_area3.html";

const elViewBox = document.querySelector('#viewBox');

fetch(path)
  .then( (response) => response.text() )
  .then( (data)=> {
    elViewBox.innerHTML = data;
  })
  .then(()=> {
    const linkCss = document.createElement('link');
    linkCss.setAttribute('rel','stylesheet');
    linkCss.setAttribute('href', '../css/src/e_04_slide_area_touch.css');
    elTitle.before();
  })
  .then(()=> {
    const elViewWrap = elViewBox.querySelector('.view_wrap');
    const elViewLi = elViewWrap.querySelectorAll('li');
    const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true);
    elViewWrap.prepend(cloneEl);
  })