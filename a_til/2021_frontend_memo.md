# 210902

문서의 메모와 메모를 업데이트(버전관리)시스템 이해
- 마크다운 사용법 (.md)
- 깃 사용법(계정), 내 폴더관리 
 - git add 선택 - 선택(생성,수정,삭제)
 - git commit-m "메모" - 메모
 - git push - 보내기 
 - git pull - 받기
 - 만약, 컴퓨터에 기존 git 자료가 없다면 git clone 주소로 자료 동기화(받기)

# 210903

## 사이트 분석

- [ ] 기존사이트 분석 (위니아딤채)
- [ ] 마인드맵 (gitmind)
- [ ] 분석된 형태 기준으로 스케치(web sketch)
- [ ] 다른사이트 - 분석(국립현대미술관)
   - 기존사이트를 의뢰서(다나와)
   - 재분석 - 3C, swot, 기업컬러
   - [ ] 페르소나(가상의 인물) - 위 분석자료를 통한 방향성 제시
   - [ ] 역제안으로 마인드맵으로 페이지 구성
   - [ ] 스케치 도안

# 210906

## 사이트 분석

- [ ] 페르소나 분석내용 작성
- [ ] 매트리스 분석
   - [ ] 컬러 매트리스 분석
   - [ ] 배색 매트리스 분석
   - [ ] 형용사 매트리스 분석
- [ ] 페이지 구조 정리 (제작 페이지)
- [ ] 메인 페이지 기준 구성요소 (A)
- [ ] 참고사이트 (디자인) 선정

# 210907

### 구조를 제작하기 위한 툴

- [ ] color
- [ ] figma - 기초 레이아웃 사용법

### 깃크라켓 사용법

- [ ] 

### 210908

### 메인페이지 구조 (하나의 페이지에서 영역배치) 

(예)
- [ ] 로고
- [ ] 메뉴
   - 모든 상품
   - 알림
   - fnq
   - contact
- [ ] 보여주고 싶은 광고
   - 광고 1
   - 광고 2
   - 광고 3
- [ ] 상품 2-3종류
- [ ] 회사정보

### 각각의 페이지 나열 

메인페이지 </br>
장바구니 <---메인에서 탭 하면 다른 페이지로 넘어가는 것---> </br> 
상품페이지 - 상세페이지 (종류별) </br>
게시판 </br>
fnq </br>
이벤트 - 이벤트 상세페이지 (종류별) </br>

### 과제

- [ ] figma 활용하여 레이아웃 제작 - 프로토타입제작 (레이어 이름 및 스타일적용)
- [ ] 개인선정사이트 메인 스케치 - 5종류 (다른 스타일로)
- [ ] 반응형으로 
   - 스마트폰 (세로형, 플립, 엣지)
   - 태블릿 (가/세로/4:3/16:9/해상도???)
   - 노트북
   - 데스크탑

# 210907-09

- [ ] figma - 반응형 페이지 제작 
- [ ] 해상도
   - 화면을 구성하는 소자 갯수
   - 화면을 구성하는 밀도
   - 가로 1인치 / 세로 1인치 점의 갯수
   - [ ] 웹은 평균적으로 72  dpi (ppi)
   - [ ] 웹툰, 태블릿 150(144dpi)
   - [ ] 인쇄는 평균적으로 300 dpi
     - K를 인쇄할 때는 1200dpi
- [ ] 미래의 단위는 px < em 또는 rem
- [ ] 16px==12pt==100%==1em==1rem

# 210914-15

### 피드백 1 

- [ ] 수정사항 전반 

### 웹코드

- [ ] vscode 설치 - 세팅
  - [ ] 마우스 휠
  - [ ] 탭인덱스
  - [ ] 테마 (아이콘)
  - [ ] 웹서버 설정
- [ ] 웹 프로토콜 포함 + html 구성
  - [ ] 제목  
---

1. 웹 구현시 지정된 기준 폴더를 설정하여 최상단으로 인식
2. 최초의 인식하는 파일은 지정된 위치기준 가장 상위폴더(최상단)에서 index.html 을 인식시켜야함.
3. 웹페이지를 구현하는 **서버를 먼저 동작 후** 진행 
4. 최상단 폴더를 기준으로 vscode를 실행
5. 절대경로 / 상대경로
    1. 절대경로 : 최상단/변하지 않는 위치에서부터 처리하는 기술
    2. 상대경로 : 사용하고 있는 문서를 기준으로 위치를 찾아가는 기능 -> 현재위치./ || 상위폴더 ../
6. shell명령어(cli명령어, terminal 명령어)-파일 생성, 폴더 생성, 위치를 이동
    1. 파일 생성 : jojunjang $ 'touch index.html (생성할 파일이름)'
    2. 폴더 생성 : jojunjang $ 'mkdir -p 생성할 폴더이름 a/b/c
    3. 위치 이동 : cd ../
    4. 삭제 파일/폴더 : rm -rf 파일|폴더

# 210905


## 코딩

- [ ] html
   - [ ] list (순서없는 것 ul>li, 순서가 있는 것 ol>li, 제목/내용이 있는 것 dl>dt+dd)
   - [ ] id/class 개념
   - [ ] <meta name="viewport" content ~~> : viewport는 반응형
   - [ ] script : (html)head, body / (style) 위치 가능 (위치에 따라 용도 상이)
- [ ] style 
   - [ ] 선택자 
      - 모든 선택자 : X  
      - 요소 선택자 : div {} | p {} | a {} | li {}
      - id선택자 : <div id="wrap">
      - class선택자 : <div class="ex_part">
      - 자손 선택자(꺽쇠가로사용안함) : .ex_part 'ul li {}'
      - 부모자식(꺽쇠가로사용) : ul > li {} 
   - [ ] 사이즈 ( width, height ) <br />
         색상처리 (background-color, color, border-color / rgba(0,0,0,0.2); : a는 소숫점자리로)
   - [ ] 시각적 여백 (누구나 보이는 여백) :  margin (내 영역 옆으로 부터 시작되는 공간)
   - [ ] 내장 지방 : padding (글씨로 부터 시작되는 공간)
   - [ ] 테두리 R값 : border-radius
   - [ ] 그림자 : box-shadow
- [ ] cil
   - [ ] 파일 이동(mv) / 파일 복제 (cp)
   - [ ] *목록보기(ls, ls-a)(간단한 명령어*)
   - [ ] *화면정리(clear) / 명령어 기록 보기 (history), 이전 명령어 사용 (!숫자)
   - [ ] *현재페이지 위치(pwd) / 컴퓨터 이름파악(whoami)
   - [ ] *위치이동 (cd)

# 210916

## 코딩

- [ ] id/class 
 - [ ] id의 역할 : # / 주민등록번호의 개념 / camelCase사용
 - [ ] class의 역할 : . / 여자, 엄마, 선생님 / under_score사용
- [ ] 표만들기 : Table (thead, tbody, tfoot), tr, th/td
- [ ] 셀 병합 방법 
   - [ ] 가로 : colspan
   - [ ] 세로 : rowspan

-------------

# 210917

## CSS

- [ ] psuedo code(의사전달코드)
 - [ ] 마우스를 올렸을 경우
 - [ ] 마우스버튼을 누르고 있는 경우
 - [ ] a요소를 이용하여 페이지를 방문한 경우
 - [ ] 초점을 맞추는 경우(focus 처리) 
 - [ ] 가상의 존재
 - [ ] 첫글자/ 첫줄
- [ ] 이미지+글쓰기 : float, clear
- [ ] 가로형 레이아웃, 세로형 레이아웃 

# 210924

## css

- [ ] nth-child
- [ ] nth-of-type
- [ ] layout

# 210927~

## 코딩

- [ ] Layout 풀이
  - [ ] float
  - [ ] h1~h6 heading 구조
  - [ ] 유효성검사
  - [ ] wai-aria
  - [ ] margin/padding
  - [ ] 1600 기준 틀을 만들고 내부) 고정형, 외부) 늘어나게 처리
  
- [ ] Semantic 구조 - (9/28)

  - [x] header (회사로고)
  - [x] nav (보통 header안에 들어간다)
  - [x] article (기사, 본문,설명)
  - [x] section (광고, 요약해둔 형태)
  - [x] aside (덧붙임, 무조건적으로 사이드에 있는 요소는 아님)
  - [x] footer (회사정보)
  - [x] main (header와 footer를 제외하고 중심적인 내용을 넣은 영역)
  - [x] Figure/figcaption (이미지를 상징, 심볼)
  - [x] 이외의 tag를 만들수 있다. 인식하고 사용가능하나 구형 브라우저는 인식이 되지 않아 사용불가능.

- [ ] Position - (9/29)

  - [ ] position은 적재적소에 맞게 사용해라(용도에 맞게 사용)

  - [ ] 성향 - 

    - [ ]  static : position의 완전 고정값
    - [ ]  *relative : 완전 고정값은 아니지만, 자기만의 기준(틀)을 잡고 있는 애 
    - [ ]  absolute : 유동적으로 변하는 기준과 연결되어서 변하는 값, relative - fixed - absolute 셋이 부모가 됨. 셋 다 붙을 수 있음 

    - [ ]  fixed : 웹 페이지에서 고정되어 있는 애들, 내가 놓고싶은 자리에 놓을 수 있음

  - [ ] 위치 - left, right, top, bottom, z-index(float)

- [ ] font

- [ ] Unit(단위)16px-12pt-100%-1em-1rem

## 과제(10/4)

- 프로토타입 페이지 - 1440 기준 (크게 커지는 경우)
- 큰 박스부터 잡기
- 주석 꼭 시작 첫번째 줄에 넣기
- 새폴더에 만들기

------

Position -pdf 문제 풀이

웹디자인 기능사 - 12가지 문제

------

# 211006

- Git 일부 자료 받기 - down git : https://minhaskamal.github.io/DownGit/#/home
  							 - gir zip(app) : 사용시 오른쪽 버튼 클릭 후
- W3 validator 앱(플러그인) - 대체 플러그인 : SLDS Validator

------

## css

- **font (서체 관련)**

  - font 불러오기

  - font 불러오기 - 사용할 웹폰트가 없는 경우

  - font-famliy 

    - 서체의 종류, 어떤 서체를 사용할건지 선택 속성 
    - 영문(대중적인) -> (대안)  -> 한글 -> (대안) ->서체의 큰범위;

  - font-weight

    - 서체의 굵기

    - ultra thin, Thin, light, (regular, normal=나누지 않는 경우도 있음), bold, bolder, black
    - 100 - 900(100단위)  / **400** (기준)

  - Font-style

    - 서체의 기울기
    - Normal, italic

  - line-height

    - 행간 - 텍스트의 하단 사이의 간격, **leading**과 다른 개념
    - 단위 : %, 단위없는 수치 ( 기본서체크기 기준 scale)

  - font-size
    - 서체의 크기 ( 기본은 영문 대문자 x의 크기를 기준)
    - 단위에 따라 조금 다를 수 있으며, 일부 font-size에 따라 박스의 크기가 변경되기도 함
  - text-transform
    - 대문자, 소문자, 단어의 첫글자를 대문자로~
    - Uppercase, lowercase, capitalize
  - letter-spacing
    - 자간 - 글자와 글자 사이의 간격
    - 0이 기본 수치
  - word-spacing
    - 어간 - 단어와 단어 사이의 간격
  - white-spacing (자주쓰는 기능은 아님)
    - 의미없는 공백
  - word-break
    - 줄 바꿈시 처리되는 방법
  - text-overflow
    - 글자가 지정영을 초과할 때 
  - color
    - 글자의 색상

------



- **unit**
  - 16px = 12pt = 100% = 1em  = 1rem
  - :root {} - 기본세팅 (reset.css 이전단계)
  - vw, vh

------

https://transfonter.org/

------

# 211019

## 수업내용

css

- [ ] overflow
- [ ] visibility
- [ ] border-radius

html

- [ ] form
  - [ ] Form - action(자료를 전송하고 검증받을 주소), method(처리방식)
  - [ ] Fieldset(영역), legend(form 영역 제목)
  - [ ] Input(자료를 입력, 버튼), label(input과 연동되는 가이드기능)
  - [ ] Textarea, select, button...

------

# 211020

## 수업내용

html

- [ ] 

css

- [ ] transition
- [ ] animation



# 211027

## 수업내용

- web에서 사용가능한 이미지
  - Jpg(손실압축, 배경색 투명저장 불가능) , 
  - png(비손실 압축, 배경색 투명저장 가능) ,
  - svg(vector)
  - gif(움짤)
  - webp(webm 과 동일하게 구글에서 만든 이미지) - IE, safari,photoshop

- [x] 포토샵
  - [x] Jpg 이미지



illustrator

- [x]  세팅
- [x] 선택자 / 부분선택자
  - [x] **선택자** : 도형자체를 선택하거나, 그룹을 선택할 때 사용
  - [x] 직접 선택자 : 도형자체를 선택보다는 일부, 영역을 선택하여 모양을 변형
- [x] 색: 면색/선색
  - [x] 색상을 변경하고자 할때는, 면/ 선색이든 바꾸고자하는 색상을 선택하여 앞으로 배치하고 이후에 변경
  - [x] Cmyk/rgb : 컬러 모두 color picker 에서 변경하는 것이 아니라 color 패널에서 색상을 변경
- [x] 내용 확인
  - [x] Ctrl Y : 객체가 만들어져 있는지 엑스레이 확인 (view > outline)
  - [x] ctrl h
  - [x] shift ctrl h
  - [x] Ctrl r
  - [x] ctrl shift d
- [x] 도형그리기 : property 패널과 함께 사용
  - [x] 사각형
  - [x] 다각형
  - [x] 별툴 : ctrl 키를 누르면 외경/내경 중 하나를 고정하여 모양을 변경
- [x] arrange
  - [x] Shift ctrl ] : 맨 앞으로 배치
  - [x] shift ctrl [ : 맨 뒤로 배치
  - [x] 여러요소를 한번에 앞/뒤로 배치해야하는 경우 여러개의 객체를 선택하여 사용
- [x] align : 정렬
  - [x] 한쪽정렬
  - [x] 각 요소별 위치기준에 따라 정렬
  - [x] 추가옵션 : 각 요소와 요소사이에 간격 정렬
  - [x] 추가옵션 : align to (selector , key, artboard)
- [x] pathfinder
  - [x] Unit : 요소들을 하나로 합치는 것
  - [x] Divide : 요소들을 분리(자르는 것)
- [x] ctrl 8 : Compound path <-> shift ctrl alt 8
  - [x] 분리되어 있는 요소들을 완전한 하나의 도형으로 처리
- [x] ctrl 7 : clipping mask
  - [x] 맨앞에는 하나의 요소, 뒤엥서는 여러개의 요소를 담아서 마스트 처리하는 기법 (처리 후 select > 동일하게 > 칠색상 >같은 색상들 선택 > 패스파인더 > 합치기)
- [ ] scale / offset
- [ ] share
- [ ] rotate
- [ ] reflect
- [ ] 연결 : ctrl 3

------

Illustrator : 웹용을 위한 이미지 저장방법

- svg 저장
- svg로 저장시 - 
  - Compound path
  - Artboard, 이미지 모두 소수점단위는 제거하고 
  - save as - use artboard 체크 - 범위를 조금 더 크게 / 체크인하면 이미지만 저장











------

**css**

- [x] responsive web (반응형 웹)
- [x] figma를 이용한 반응형 웹 구축
- [x] Display:flex; (display:grid;)

**js**

최신 브라우저에서 js 최신 표준을 지원하지만 그 기준이 현재의 표준보다 늦다.

또한, 구형 브라우저에서는 ES6 이상의 버전을 지원하지 않는다.

이를 해결하기 위해 다양한 방법을 시도하는데 이를 플리처리한다고 한다.

babel로 처리하면 간단하게 최신 내용을 작성하고, 이를 변환하여 구형 브라우저에서도 동작 가능하도록 사용할 수 있다.

이를 변경하여 구형 브라우저에서도 동작 가능하도록 사용할 수 있다.

- [x] 변수 선언 - 호이스팅현상
- [x] 형타입 체크 - 숫자, 문자, 특수(undefined,/null),논리(t/f),객체(o,a),함수(function)
  - [x] 배열 메소드 : push, pop, unshift,shift
  - [x] 참조변수(배열,객체) / 일반변수 : 값 자체
  - [x] 함수 : 선언식-기명함수 : 함수에 이름을 가진다.(함수자체가 호이스팅)  /  표현식-익명함수 : 변수에 함수를 담는다.(변수이름만 호이스팅)
  - [x] 즉시실행함수 : (function(매개변수){인수} ) - 선언과 동시에 실행 / 메모리 낭비를 줄이기 위해, (개인정보 등) 외부에 노출되지않고, 기능을 각각 별도로 사용하려고
  - [x] 전역변수, 지역변수
  - [x] 문자 + 문자 -> 문자,  문 + 숫 -> 문,  숫 + 숫 ->숫자연산,  문자/숫자 -> NaN(숫자)

# 211105 ~ 12

## 수업내용

**css ~ 전처리기(scss)**

- [x] Vscode - plugin - live server compile, prepress, node.js
- [x] 변수( $이름), nesting( 선택자{ 선택자 { &:hover{} } } )
- [x] list, map
- [ ] dictionary
- [x] @mixin/@include , @function, @if

**Javascript**

- [x] 연산자
  - [x] 사칙연산( + - * / % )  5 % 3  -> 2
  - [x] 증감연산( ++a, a++, --a, b-- ) , 할당연산( += , -=, /=, *=, ... ), ... a+=1; , 비교연산( ||, &&, |, & ), 동치연산( ===, !==)
  - [x] 삼항연산 : 3가지 영역으로 나눠서 처리하는 연산  / (조건) ? 참 : 거짓 ;
- [x] 객체 내 객체 (배열 / 함수) [ [], [], [], [] ], [ {}, {}, {}, { a:[], b:[] } ]
- [x] 문법
  - [x] 조건문(switch, if) 
  - [x] 반복문( while (실무에서는 쓰지않음) , do-while, for, for-in, for-Each )
- [x] 메소드 : 객체 배열을 수행하는 함수( ) - 사용자 지정 형태.메소드( )  
  - *push*, ***forEach***, *shift, pop, unshift*, *split,* ***reduce***, *reverse*, *join,* *splice*, *sort*, **filter**, *length*,*indexOf*,*concat*
- [x] 내장함수 : 이미 만들어진형태.메소드( ) | 만들어져있는함수  - 자바스트립트에 기본적으로 내장되어있는 함수이다. 
  -  alert( ), prompt( ), comfirm( ), Math.random( ), Math.ceil( ), Math.round( ), console.log( ) ...
- [x] 함수 - 클로저, 재귀함수
- [x] 깊은 복사, 얕은 복사



# 211122

## 수업내용

- [ ] 생성자 함수( 함수를 생성한다는 의미를 가지지만, 원본으로 만들어서 사용할 때는 별도의 복제본을 쓰는 것.)

```javascript
 var Fn = function(site,link){
  this.name = site;
  this.url = link;
 }
 var naver = new Fn('naver', 'http://naver.com');
```



- [ ] this (window, 함수에서 window객체, 메소드 안에서 호출한 객체) - 무언가를 가리키는 지칭

```javascript
// this
// 1. window : 
console.log( this ); // window
// 2. window/undefined - 'use strict'; 유무
// 3. 생성자 함수에서 인스턴스 처리시 (객체로 변환) 그 변수
// 4. 메소드 처리시
// 5. 이벤트의 주체
```

- [ ] prototype(사용하게 위해 기본 편성된 내장 기능)

```javascript
var Fn = function(site, link){
	this.name = site;
	this.url = link;
}
Fn.prototype.charactor = 'sally';
var naver = new Fn('naver', 'http://naver.com');

naver.name // naver
naver.url // http://naver.com
naver.charactor // sally

// call, apply, bind
// 유사배열, 배열 구분하여 전환
// Array.prototype.slice.call();
```

- [x] 객체를 불러와서 활용 1 : 브라우저에 코드를 삽입
  - [ ] 선택자, 생성, 삽입, 덮어씌우기(html, text), style, attribute
  - [ ] 여러개의 내용을 반복 순환하기 위해, for/forEach
  - [ ] 하나의 기능이 여러번 반복하기 위헤 해당 기능들을 하나의 묶음으로 function(){}
  - [ ]  jQuery를 통해 파일을 삽입하는 방법과의 비교(js 는 무엇이든 수동, jQuery는 반자동)
- [ ] JSON 처리
  - [ ] 외부파일을 불러오는 방법 ( XMLHttpRequest(open, send), fetch/then )
    - [ ] var http = new XMLHttpRequest(); http.open('GET','fileurl',true ); , http.send(); http.status;
  - [ ] GET(추출), POST(생성), PUSH(수정), DELETE(삭제) - crud

------

# 211124

## 수업내용

- javascript
  - jQuery 일부 기능 파악 : slide 기능 - 기본(class), animation
  - javascript를 이용하여 jQuery기능과 동일하게 처리하는 방법
- scss
  - 부트스트랩으로 처리된 반응형 navigation 영역을 직접 코딩

------

# 211126

## 수업내용

- ##### javascript

  - 호이스트, 함수 - 응용 + 애니메이션 추가, for, if, 객체, 배열
- [ ] 버튼 클릭시 사라지는 기능의 반대로 나타나는 형태로 제작
    - [ ] 슬라이드 형태, fade 처리
  - [ ] for / forEach문 정리 - 탭메뉴 사용법
- [ ] setTimeout, setInterval, clearInterval, call, apply, bind, css값 가져오기

------

# 211201

## 수업내용

- javascript

  복습단계체크
  
  - [ ] setInterval, setTimeout, clearInterval
  - [ ] transition
  - [ ] Index 파악 - if, 삼항연산자
  - [ ] 여러 선택자를 모아서 사용가능하게 - 배열로 처리, forEach사용
  - [ ] 접근성 고려를 위해 focus, for 문을 시용하여 forEach 대신 이벤트 처리 + 클로저

  수업 내용 :
  
  - [ ] 탭메뉴 구성, fadeIn, fadeOut 처리에 따른 구성

------

# 211202

## 수업내용

- javascript

  **복습단계체크 및 진행** :

  - [ ] tabindex기능
  - [ ] 요소 내부에 html코드 삽입하기 + html생성방법
  - [ ] 모달 윈도우 처리하는 방법
  - [ ] 객체형태의 data를 담아서 처리하는 방법

- 16일 반응형 코드 제작

# 211203

## 수업내용

진행 체크 :

- 지난시간에 했던 내용 보수

  - 추가로 내부에 요소를 담는 메소드 : <br / >

    append, prepend, before, after

  - textContent
  - next / prev
  - Focus : a, button 강제로 초점을 맞출 때

- 모달 윈도우 + fadeIn, fadePut

- 자료 관리/ 저장하는 방법/ 

- branch로 처리하는 방법 - vercle



# 211209

## 수업내용

- js

  진행 체크 : 

  - [ ] package.json - script, devDependencies, dependencies, module(부품)
  - [ ] babel - es6 이상 버전의 파일을 공통으로 사용가능하게 만드는 모듈
    - [ ] babel.config.js, babel.config.json, babelrc
  - [ ] ES6
    - [ ] 변수 선언 : ```const``` - 상수 : 선언과 동시에 그 값, 형태를 취해야 한다. ```let``` - 변수 : 선언 후 값을 기입 / 변경 가능, 변수가 사용되는 범위
    - [ ] 비구조 할당
    - [ ] 함수 :  표현식, 선언식, 즉시실행함수, 화살표함수
    - [ ] ajax :``` XMLHttpRequest```, ```fetch().then()```

------

## **시험 : 2021.12.16**


- 반응형으로 figma 디자인 완성(모든페이지)

- 320, 768, 1280, 1440, 1920 (기준수치에서 변경 가능하지만, 다른페이지 모두 설정된 사이즈와 동일한 기준에서 변경)

  



------

```
javascript

// -------------------------------------------------------------------------------------
var id = document.getElementById( 'wrap' );
var class1 = document.getElementsByClassName( 'box' )[ n ];
var class2 = document.getAttribute( 'class', 'box' );
var type = document.getElementsByTagName( 'html' );
// var nodeSelect = document.querySelector( 'ul' );

// -------------------------------------------------------------------------------------
Var $ = function( ){ 
	var inser = arguments;
	switch( insert[0] ){
		case ' . ' :
				document.getElementsByClassName( insert );
				break;
	  case ' # ' :
				document.getElementById( insert );
	  default :
				document.getElementsByTagName
  }
}
```



