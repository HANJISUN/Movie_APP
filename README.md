# 🎬 Grip Movie App

Grip Movie App은 아래 기능을 제공합니다. 
- 영화 검색 및 즐겨찾기
- 사이트 재 방문시 이전에 즐겨찾기 한 목록 제공

<br />  

## 🌐 Build Link

https://hanjisun.github.io/wanted_pre_onboarding_grip/

<br />  

## 🔨 Technologies Used

`React`, `TypeScript`, `Recoil`, `Scss`

<br />  

## 💡 Project List

#### 🔍 Search Page
- 서비스 첫 진입 시 검색 탭에서 시작
- 상단 검색창 고정, 하단에 검색 결과 화면 노출
- 검색창에 영화 이름 입력 후 검색 버튼 클릭 시 검색 결과 노출
  - 검색 결과 있는 경우, 검색 결과 목록 제공
  - 검색 결과 없는 경우, 검색 결과 없음 표시
- 검색 결과 목록 최하단에 도달할 경우 결과 노출
  - 검색 결과 있는 경우, 다음 페이지 검색 결과 목록 제공
  - 검색 결과 없는 경우, 더 이상 검색 데이터가 없음 표시

#### ❤️ Favorite Page
- 영화 클릭 시 즐겨찾기 추가/제거 모달창 활성화
- 즐겨찾기 추가할 경우 목록에 추가
- 즐겨찾기 해제할 경우 목록에서 제거 
- 별도의 페이징 없이 한 번에 모든 데이터 로딩
- 재 접속 시 이전에 즐겨찾기 한 목록 제공

<br />  

## 🤔 Memoir

회고에 앞서 디자인에 대해 간략하게 설명하자면 Grip Movie App은 영화 Sin City에서 영감을 받아 BLACK & RED 컨셉으로 디자인하였습니다.  
이번 개인 과제에서 가져가고 싶었던 목표인 Recoil을 도입하여 상태 관리를 진행했는데, 처음에는 조금 어려웠지만 적응되고 난 후에는 훨씬 간편하다는 것을 몸소 체험할 수 있었습니다. 그리고 매번 공부 계획만 세우고 미뤄두었던 TypeScript를 이번 프로젝트를 통해 속성으로 깨우칠 수 있었던 프로젝트라서 기억에 남는 프로젝트가 될 것 같습니다. 마지막으로 선택 구현 과제인 Drag and Drop 기능을 구현하지 못해 조금 아쉽지만, 이후 리팩토링 과정을 진행하며 기능을 구현해 볼 계획입니다.  

<br />  

## 💻 Run Terminal

아래 순서대로 터미널에 입력해주세요.

```
$ git clone https://github.com/HANJISUN/wanted_pre_onboarding_grip.git
```

```
$ cd wanted_pre_onboarding_grip
```

```
$ yarn
```

```
$ yarn start
```

