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

const path = "../temp/slide_area3.jsx";

const elViewBox = document.querySelector('#viewBox');
const elTitle = document.querySelector('head>title');
// let elViewWrap;
// let elViewLi;

fetch(path)
  .then( (response) => response.text() )
  .then( (data)=> {
    elViewBox.innerHTML = data;
  })
  .then(()=> {
    const linkCss = document.createElement('link');
    linkCss.setAttribute('rel','stylesheet');
    linkCss.setAttribute('href', '../css/src/e_04_slide_area_touch.css');
    elTitle.before(linkCss);
  })
  .then(()=> {
    const elViewWrap = elViewBox.querySelector('.view_wrap');
    const elViewLi = elViewWrap.querySelectorAll('li');
    // const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true);
    // elViewWrap.prepend(cloneEl);
    return [elViewWrap, elViewLi];
  })
  //.then((el)=> {
  //  const elViewCon = elViewBox.querySelector('.view_content');

    // elViewCon.addEventListener('touchstart', (e)=> {
    //   console.log( e.changedTouches[0].pageX );
    //   console.log( e.touches[0].pageX );
    // });
    // elViewCon.addEventListener('touchstart', (e)=> {
    //   console.log( 'changed:', e.changedTouches[0].pageX, 'touch:', e.touches[0].pageX  );
    // });
    // elViewCon.addEventListener('touchstart', (e)=> {
    //   console.log( 'changed:', e.changedTouches[0].pageX );
    //   console.log( 'touch:', e.touches[0].pageX );
    // });
  //   console.log( elViewCon.getBoundingClientRect().left );
  // })

  .then((el)=> {
    const elViewCon = elViewBox.querySelector('.view_content');
    const liLen = el[1].length - 1;
    let conWidth =  elViewCon.clientWidth;
    let leftData = parseInt(el[0].style.left);
 
    // 좌표 x의 이동점의 차이가 100px 이상 나면 해당하는 위치로 이동

    
    // 기능추가 ------------------------------------------
    
    const pointer = { }; // start, end, gap
    let SLIDE_COUNT = 0;
    let PERMISSION = true;
    let TIMED = 500;

    elViewCon.style.overflowX = 'hidden';
    el[0].style.marginLeft = 0;
    el[0].style.position = 'relative';
    el[0].style.left = 0;
    el[0].style.transition = 'left 500ms linear';

    // console.log('width:', el[0].parentNode.clientWidth );

    // element.clientWidth : padding포함한 width
    // element.offsetWidth : padding + border 포함한 width
    // element.getBoundingClientRect() : 외곽에 보이는 width

    // 함수 ---------------------------------------------
    const fnSlideMove = () => {
      if(PERMISSION) {
        PERMISSION = false;
        if( pointer.gap >= 100 &&  SLIDE_COUNT < el[1].length - 1 ){
          SLIDE_COUNT +=1;
        } else if ( pointer.gap <= -100 && SLIDE_COUNT > 0 ){
          SLIDE_COUNT -=1;
        }
        el[0].style.left = -100 * SLIDE_COUNT + '%';
        setTimeout(()=>{ PERMISSION = true; }, TIMED)
      }
    };
    // 이벤트 --------------------------------------------
    elViewCon.addEventListener('touchstart', (e)=> {
      console.log( '시작점', e.changedTouches[0].pageX );
      pointer.start = e.changedTouches[0].pageX;
      let leftData = parseInt(el[0].style.left);// 기존 % 수치
      
    });

    elViewCon.addEventListener('touchmove', (e)=> {
      let _nowPointer = e.changedTouches[0].pageX;
      // 시작점 기준으로 움직인 값 : pointer.start - _nowPointer
      let _pointerMove = pointer.start - _nowPointer; // 움직인 수치를 계산 
      // 해당하는 움직인 값의 % 값 : 움직인 값 * 가준 / 100
      let movePer = parseInt(_pointerMove / conWidth * 100); // 현재 움직인 값에 대한 % 위치
      let movePx = leftData - movePer;

      // if(SLIDE_COUNT !== 0 && SLIDE_COUNT !== el[1].length - 1){
      //   el[0].style.left = (leftData - movePer ) + '%'; // start위치에서 움직인 만큼 화면이 이동하게
      // }

      // 첫 슬라이드 또는 마지막 슬라이드 위치이며, 해당 위치보다 바깥 슬라이드 방향으로 터치가 움직인다면
      let ckFirst = SLIDE_COUNT === 0 && _pointerMove > 0; // true면 동작하지 않음
      let ckLast = SLIDE_COUNT === liLen && _pointerMove < 0; // true면 동작하지 않음
      if(ckFirst || ckLast){
        el[0].style.left = (leftData - movePer) + '%';
      }


    });

    elViewCon.addEventListener('touchend', (e)=> {
      console.log( '끝점', e.changedTouches[0].pageX );
      pointer.end = e.changedTouches[0].pageX;

      pointer.gap = pointer.start - pointer.end;
      console.log( pointer );
      fnSlideMove();
    });
  }); // then

  // Q1 : 갭차이가 100 이상 날 경우 그 값이 음수이면 이전내용, 양수이면 다음 내용이 나타나게 만드시오.
  

  // 터치를 기반으로 처리하기
  // touchstart : 이벤트 핸들러 중 터치의 시작을 의미한다.
  // touchmove : 이벤트 핸들러 중 터치를 이용하여 움직이는 상황.
  // touchend : 이벤트 핸들러 중 터치의 끝을 의미한다.
  // event.changedTouches[0] : 터치를 인식하여 좌표를 계산하는 위치.
  // event.touches[0] : 터치를 인식하여 좌표를 계산하는 위치. (touchend는 없음.)
  // 터치를 이용하여 좌표를 계산하는 기능 : clientX, screenX, pageX 가 존재 (y좌표도 있음.)
  // 대상의 위치를 기준으로 좌표를 계산(offsetX)하는 기능이 없으므로,
  // 해당 요소의 위치를 파악하는 기능이 필요하다. : target.getBoundingClientRect().left | 
  // target.getBoundingClientRect().top