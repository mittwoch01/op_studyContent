// Main.js (page)

import React, { useState, useEffect } from 'react';

import '../style/Main.scss';
import '../style/MainViewBox.scss';

export default function Main() {
  
  const listData = ['content_01', 'content_02', 'content_03', 'content_04'];
  listData.unshift(listData[listData.length-1]);

  const [num, setNum] = useState(0);
  // const [check, setCheck] = useState('next');
  const checkRef = useRef('next')


  const setStyle = {
    position:'relative', left:'-100%',
    transition:(num === 0) ? 'margin 500ms ease': 'none',
    animation: 'firstSlide 500ms ease 1',
    marginLeft:`${num * -100}%`
  }

  useEffect( ()=>{
    console.log( listData[num] );
  }, [num])


  // const fnClassAdd = (i)=>{
  //   const ON = (i === num) ? '  on' : '';
  //   const VIEW = 'view_';
  //   const textNum = '000' + (i+1);
  //   const VIEWTEXT = VIEW + textNum.slice(-2);
  //   return VIEWTEXT+ ON;
  // };

  // const viewData = listData.filter( (list,idx) => idx === num );
  
  return (
    <div className='main_area'>
      <h2>Title</h2>
      <div className='view_part'>
        <div className='slide_btn'>
          <button type='button' className='next' onClick={ ()=>{ setNum( num >= 3 ? 0 : num + 1 ) }}>다음</button>
          <button type='button' className='prev' onClick={ ()=>{ setNum( num <= 0 ? 3 : num - 1 ) }}>이전</button>
        </div>
        <div className='view_contents'>
          <ul style={setStyle}> 
            {/* <li className='view_01 on'>01</li>
            <li className='view_02'>02</li>
            <li className='view_03'>03</li>
            <li className='view_04'>04</li> */}  

            {/* 내가 보고싶은 부분만 보이게 하는 방법 */}
            {listData.map( (list, idx)=> 
                <li className={ fnClassAdd(idx) } key={idx}>{list}</li> )}

            {/* {viewData.map((list, idx)=> 
                <li className={ fnClassAdd(idx) } key={idx}>{list}</li> )} */}

          </ul>
        </div>
      </div>
    </div>
  )
}

// 외부 데이터를 불러오기 위해서는 useEffect를 사용
// 비동기로 처리되는 데이터를 컴포넌트에 적용하기 위해서는 useState를 이용하여 변환



            
            