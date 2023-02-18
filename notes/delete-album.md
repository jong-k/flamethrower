## delete album endpoint 만들기
### 1. albumsApi.ts 로 이동
- removeAlbum 이름으로 endpoint 추가
- 데이터를 제거하므로 mutation
- query url 뒤에 템플릿 리터럴로 앨범 아이디 추가해야 함
- hooks는 "@reduxjs/toolkit/query/react"; 덕분에 자동으로 생성되므로 export에 추가해주자
  - useRemoveAlbumMutation

### 2. store/index.ts 로 이동
- store 에서 hooks import, export 해주기

### 3. AlbumsList.tsx 로 이동
- 컴포넌트에서 hooks import
- 컴포넌트 상단에서 hooks에서 언패킹
  - 실제로 mutation 실행할 함수 (엔드포인트 이름과 같음)
  - 결과 state (results)

### 4. AlbumsListItem.tsx 생성
- 기존에 AlbumsList.tsx 에서 map으로 만들어주던 것을 대신할 컴포넌트인 AlbumsListItem 생성
- hooks 연결
- tag 무효화
  - album에 있는 userId를 이용!

### 5. 별도
- 그런데 만약 album에 userId가 없는 경우라면??
- 방법1) useRemove~ mutation hook 의 removeAlbum 메서드에서 매개변수에 album과 user를 함께 전달!
```ts
const handleRemoveAlbum = () => {
  // removeAlbum({ album, user }); 형태로
}
```
- 이를 위해 endpoint에서 queryArg 에 { album, user } 같은 객체 형태로 전달해야 함