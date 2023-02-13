## RTK Query API 만들기
### 1. 비슷한 request 그룹화하기
- users
- albums
- photos
### 2. api를 만드는 새로운 파일만들기
### 3. reducerPath 추가하기
- API가 data, request status, error와 관련된 상태를 저장하가 위해
### 4. baseQuery 추가하기
- request를 언제, 어떻게 보낼지 결정하기 위해
### 5. endpoints 추가하기
- api의 목표는?
  - ex) fetch a list of albums
- 간단한 이름은?
  - ex) fetchAlbums
- query or mutation?
  - ex) query
- 해당 request의 path는? (baseUrl과 관련된)
  - ex) all fetch : /albums
- query string은?
  - ex) ?userId=userId
- request method?
  - ex) GET, POST ...