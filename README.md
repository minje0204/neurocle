## 뉴로클 과제

---

**How to Start**

```
npm i
npm start
```

**기술스택**

- React - ver 18.2.0
- react-konva
- styled-components
- Material UI
  - 아이콘 및 기본 UI 컴포넌트 활용하기 위해서
- react-color
  - 선 색깔 지정을 위해서

**기능명세**

벡터 방식의 드로잉 툴 구현

- [x] 드로잉 타입 선택
  - 직선
    - onMouseDown발생 지점부터 onMouseUp지점까지 `<Line>`활용
  - 곡선
    - onMouseMove 발생시 `<Line>`에 포인트 추가
  - 원
    - onMouseDown발생 지점 - onMouseUp지점을 **radius**로 `<Circle/>`활용
  - 직사각형
    - `<Rect/>`활용
  - 다각형
    - input박스로 꼭짓점 갯수를 입력 받고 (기본값 5) `<RegularPolygon/>`활용
  - 새로 고침 이후에도 캔버스 내용이 유지
    - localStorage에 도형 정보 저장
- [x] 선 두께 선택
  - 두께 값의 최소/최대 제한이 필요(최소 5px, 최대 50px)
- [x] 컬러 선택
  - 현재 선택된 컬러를 사용자가 인지할 수 있어야 합니다.
    - react-color 사용

선택 사항

- [x] Undo, Redo
  - 지난 작업으로, 마지막으로 작업한 시점으로 돌아올 수 있어야 합니다. **최근 40**개의 작업 기록만 저장
    - history Array와 history step값을 활용하여 구현
    - **Undo**는 도형정보 array 마지막 엘리먼트 slice
    - **Redo**는 도형정보 array 마지막에 history 도형 정보 추가

**폴더구조**

```
src
|   App.js
|   index.js
|
+---components
|   +---common
|   |       CustomButton.js
|   |
|   +---nav
|   |       ColorPicker.js  #색 정하기 관련 컴포넌트
|   |       Header.js
|   |       Nav.js      #도형 그리기, 두께, 색 선정 버튼 등
|   |
|   \---stage
|           CustomLayer.js   # 사용자가 그린 도형 그리기
|           CustomStage.js   # konva Stage에서 발생하는 마우스 이벤트 설정
|
+---hooks
|       useHistoryContext.js  #history 관련 Context
|       useShapesContext.js   #새로운 도형 만들기, mousemove시 도형 그리기 관련 Context
|       useToolContext.js  #두께,색, 어떤 도형을 그릴지 사용자 입력값 관련 Context
|
\---shapes  #도형 최초 생성시 initial값과 MouseMove시 변경되는 값 관련 코드
        utilsCircle.js
        utilsLine.js
        utilsPolygons.js
        utilsRectangle.js
```

제출방법 : 개인 Github에 소스코드 업로드 후 Github 주소를 본 메일(neurocle@neuro-cle.com)로 송부
