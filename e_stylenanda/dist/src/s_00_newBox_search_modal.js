// s_00_newBox_search_modal.js

const newBox = document.querySelector('#newBox');
const indi = newBox.querySelector('.indicator');
const mobList = indi.querySelector('.mob_list');
const modalArea = indi.querySelector('.mob_search_modal_area');

// open btn
const searchLi = mobList.querySelector('.mob_button > .two');

const searchModal = modalArea.querySelector('.mob_inner');

// closeBtn
const searchCloseBtn = searchModal.querySelector('.search_close_btn');

// 이벤트 처리
searchLi.addEventListener('click', (e) => {
  e.preventDefault();
  modalArea.classList.add('on');
});

searchCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalArea.classList.remove('on');
});

// 다른 이벤트 처리 해보기 if else 써보기

// var displayFn = view => {
//   var displayCheck = view || false;
//   console.log(displayCheck);
//   if(!displayCheck){
//     modalArea.style.display = 'black';
//   }else{
//     modalArea.style.display = 'none';
//   }
// };




