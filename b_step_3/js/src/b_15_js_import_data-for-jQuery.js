// b_15_js_import_data-for-jquery.js

// $(document).ready(function(){})
// $.ready(function(){});
// 
// // IIFE 즉시실행함수
// var fn = function($){};
// fn(jQuery);

(function($){

  // jQuery 특징
  // 1. $() : 선택자 - 이후에 들어가는 요소들 대부분 메소드
  //    해석을하면, 용어그대로 읽으면 됨
  // 2. $.메소드() : 유틸리티메소드 - 어떠한 기능처리 - 이후도 메소드 해석을하면, 메소드 기준으로 읽으면 됨

  // $.ajax().done(function(){});

  // Asynchronous JacaScript and XML (JSON)
  // 실시간(비동기)로 자료 체크기술 - ex. github
  // 동기 : 새로고침 또는 아예 다른 페이지를 전환 

  // ------------------------------------------------
  // 제이쿼리로 데이터 불러오기!!

  console.log('1. 내용 스타트!');
  // js 기본 경로는 html을 기준
  var path = '../data/sample.txt';
  var dataFlie;
  $.ajax({
    url:path
  }).done(function(data){
    console.log('2. ajax를 이용하여 파일 불러오기');
    var importData = data;
    var arr = importData.split(',');
    // console.log( arr );
    dataFile = arr;
  });
  
  console.log('3. ajax 뒤에 내용 표기');
  // setTimeout은 정해진 일정시간 뒤에 기능을 수행하는 함수
  setTimeout(function(){
    console.log( dataFile );
    console.log('4. setTimeout 처리');
  }, 500);

  console.log('5. setTimeout 함수 뒤에 수행');

  
  // ---------------------------------------
  var jsonPath = '../data/person_card.json';
  $ajax({
    url:jsonPath
  }).done(function(data){
    var dataList = data;
    console.log( dataList );
  });

  $.getJSON(jsonPath, function(data){
    console.log(data);
  })





})(jQuery);