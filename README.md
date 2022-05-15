# Grip Movie App

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

