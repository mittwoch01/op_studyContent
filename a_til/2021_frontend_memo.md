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

# 211018

## 수업내용

css

- [ ] transform:
  - [ ] translate() - 위치이동
  - [ ] rotate() - 회전
  - [ ] skew() - 기울기
  - [ ] scale() - 배율
  - [ ] perspective() - 원근법

- [ ] Perspective:transform에 들어가는 값과 동일한 기능이지만 그 범위를 설정할 때 사용하는 기능

html

- [ ] Video, audio, iframe

  - [ ] Video : mp4, ogg, ogv(음성을 뺀 영상), mebM

  - [ ] Audio : mp3, ogg

  - [ ] Iframe : 외부의 문서를 불러와서 삽입하는 코드 (Facebook, twitter, instagram, youtube)

- [ ] overflow, visibility, border-