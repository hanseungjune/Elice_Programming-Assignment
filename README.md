# ⭐ Elice - 미니프로젝트(과제C)

> 아래의 gif를 클릭하시면, 배포된 화면으로 넘어갑니다.

<div>
    <a href="https://elice-programming-assignment-git-main-hanseungjune.vercel.app/?keyword=&price=&page=1">
        <img src="./ELICE_GIF.gif" alt="ELICE_GIF">
    </a>
</div>

<br/>

# ⚙️ 실행 방법

```bash
git clone [github_URL] .
npm install
npm start
```

<br/>

# 🎛️ 커밋 컨벤션

```bash
feat: 기능 추가, 삭제, 변경 (코드 수정)
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
env: 모듈 및 라이브러리 설치 등
```
<br/>

# 🗓️ 기간
- 2023년 09월 10일 ~ 2023년 09월 11일

<br/>

# 🧭 목적
- prettier, eslint 적용
- redux, redux-thunk를 통해서 전역상태관리 및 비동기 통신 처리
- Filter (무료, 유료) 적용(filter_conditions 파라미터 이용)
- 검색을 통해서 기능 적용(setTimeout을 통한 디바운싱)
- url query (브라우저를 새로고침해도 필터 유지)
- 페이지네이션을 통해서 API 요청
- test 코드 작성 (페이지네이션 - API 요청이 잘 안되었어서 해봤다)

<br/>

# ✅ Task

## ❗구현 사항
- ⭕ prettier, eslint 적용
- ⭕ redux, redux-thunk를 통해서 전역상태관리 및 비동기 통신 처리
- ⭕ Filter (무료, 유료) 적용(filter_conditions 파라미터 이용)
- ⭕ 검색을 통해서 기능 적용(setTimeout을 통한 디바운싱)
- ⭕ url query (브라우저를 새로고침해도 필터 유지)
- ⭕ 페이지네이션을 통해서 API 요청
- ⭕ test 코드 작성 (페이지네이션 - API 요청이 잘 안되었어서 해봤다)

## 💡 진행순서
- CRA를 통해서 프로젝트를 설치
- webpack, babel 세팅
- UI 스켈레톤 생성
- API 요청
- Search Filter 요청 적용
- 무료, 유료 Filter 요청 적용
- 페이지 네이션을 통해 20개씩 요청 적용
- url query를 통해서 브라우저 URL로 유지하여 요청하게 함
- test 코드 작성 (페이지 네이션에 대한 문제가 많았어서 작업)

## 🎖️ Members

<table border>
  <tbody>
    <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/92035406?v=4"  alt=""/>
        FE.<br/>
        <a href="https://github.com/hanseungjune">
          <img src="https://img.shields.io/badge/한승준-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

# 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg)
![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg)
![redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![styledcomponents](https://img.shields.io/badge/styledcomponents.js-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

<br/>

# 📍 각 기능 구현 설명

- ❤️ Search Filter 요청
   - 구현 기능 : 검색을 통해서 관련 검색어 API 요청
   - 어떻게 구현했는지
     - timer 상태를 관리하여 사용자가 검색어를 입력할 때마다 API 요청을 보내지 않고 일정 시간(300ms) 동안 기다렸다가 요청을 보내는 디바운싱 기능을 구현
     - `SET_TITLE` 액션을 디스패치하여 리덕스 상태에 검색어를 업데이트
     - getAPIURL 함수를 사용하여 API 호출에 필요한 URL을 생성 및 요청
- ❤️ 무료, 유료 Filter 요청 적용
   - 구현 기능 : 버튼 클릭을 통해서 필터링된 API 요청
   - 어떻게 구현했는지
     - 선택된 필터 (무료 혹은 유료)를 토글하고 새로운 필터링 조건으로 코스 데이터를 다시 요청
     - `TOGGLE_FREE`, `TOGGLE_PAID` 액션을 디스패치하여 리덕스 상태에 따라 강의를 필터링해서 업데이트
     - getAPIURL 함수를 사용하여 API 호출에 필요한 URL을 생성 및 요청
- ❤️ 페이지 네이션을 통해 20개씩 요청 적용
   - 구현 기능 : 페이지 네이션을 통한 API 요청
   - 어떻게 구현했는지
      - 강의 총 갯수를 20개씩 나눠서 총 페이지를 구하고, 이를 통해서 시작 페이지와 끝 페이지를 구하고, 해당 page를 통해서 API를 요청합니다.
      - `SET_CURRENT_PAGE` 액션을 디스패치하여 리덕스 상태에 활성화된 페이지를 통해서 업데이트
      - getAPIURL 함수를 사용하여 API 호출에 필요한 URL을 생성 및 요청
- ❤️ URL Query를 이용한 강의 상태 관리
   - 구현 기능 : URL Query를 이용한 상태 관리
   - 어떻게 구현했는지
      - `getInitialStateFromQuery`: 현재의 URL 쿼리 파라미터를 만들고, 다시 가져와서 새로고침해도 다시 가져올 수 있게 함
- ❤️ test 코드 작성 (페이지네이션에 대한 문제가 많았어서 작업)
   - 구현 기능 : 페이지네이션 관련 test 코드 작성
   - 어떻게 구현했는지
      - 렌더링이 제대로 되었는지 확인
      - 액션 디스패치가 제대로 되는지 확인

# 🌳 File Tree

```
📦src
 ┣ 📂actions
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜types.ts
 ┣ 📂components
 ┃ ┣ 📜CourseListComponent.tsx
 ┃ ┣ 📜CourseListMain.tsx
 ┃ ┣ 📜FilterComponent.tsx
 ┃ ┣ 📜Nav.tsx
 ┃ ┣ 📜PaginationComponent.tsx
 ┃ ┗ 📜SearchBoxComponent.tsx
 ┣ 📂reducers
 ┃ ┗ 📜courseReducer.ts
 ┣ 📂styles
 ┃ ┣ 📜AppStyle.ts
 ┃ ┣ 📜CourseListComponentStyle.ts
 ┃ ┣ 📜FilterComponentStyle.ts
 ┃ ┣ 📜NavStyle.ts
 ┃ ┣ 📜PaginationComponentStyle.ts
 ┃ ┗ 📜SearchBoxComponentStyle.ts
 ┣ 📂test
 ┃ ┗ 📜PaginationComponent.test.tsx
 ┣ 📂utils
 ┃ ┗ 📜utils.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setupTests.ts
 ┗ 📜store.ts
```

<br/>

# ✒️ 회고

<table>
  <thead>
    <tr>
      <th width="45%">프로젝트 후기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <li>에러 핸들링: API 요청 중 발생할 수 있는 예외 상황에 대한 에러 핸들링을 더 세밀하게 구현할 필요가 있습니다.</li>
        <li>테스트 커버리지: 페이지네이션 외에도 다른 기능들에 대한 테스트 커버리지를 높여 신뢰성을 향상시켜야 합니다.</li>
        <li>Redux와 비동기 처리: Redux-thunk를 활용한 비동기 처리 방식에 대해 경험해보았습니다.</li>
        <li>코드 퀄리티 관리: Prettier와 ESLint를 적용하여 코드의 일관성을 유지하고 버그를 사전에 방지하는 방법을 학습했습니다.</li>
      </td>
    </tr>
  </tbody>
</table>
