## 뉴로클 과제

마감기한 23년 1월 2일(월) 24시 까지

기술스택

- React
- Konva

기능명세

벡터 방식의 드로잉 툴 구현

- [ ] 드로잉 타입 선택
  - 직선, 곡선, 원, 직사각형, 다각형 한 화면에 나타나게
  - 새로 고침 이후에도 캔버스 내용이 유지
- [ ] 선 두께 선택
  - 두께 값의 최소/최대 제한이 필요(최소 5px, 최대 50px)
- [ ] 컬러 선택
  - 현재 선택된 컬러를 사용자가 인지할 수 있어야 합니다.

선택 사항

- [ ] Undo, Redo
      도형하나 생성 <> 지움
      circles 1
      rectangle 2
      redo일때는 history생성
      undo일때는 삭제
      통합관리한다고 치면 undo는 자르고 redo는 다시 concat하는 식으로 가능
      통합관리 {type:circle, data:~~~~}

  - 지난 작업으로, 마지막으로 작업한 시점으로 돌아올 수 있어야 합니다. **최근 40**개의 작업 기록만 저장

- [ ] 도형 움직일수있게?ㅎㅎ..
- [ ] 두께조절 인풋박스 str입력시 예외처리
- [ ] 색조절 깔끔하게 처리해보기

제출방법 : 개인 Github에 소스코드 업로드 후 Github 주소를 본 메일(neurocle@neuro-cle.com)로 송부
