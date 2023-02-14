## add user 이벤트 핸들러의 flash 문제
- add user 클릭하면 sudden flash 유발.. 원인은?
  - addUsers 가 isLoading 상태이면 로딩 스켈레톤이 렌더링되기 때문에 잠깐 깜빡임 발생
- 이를 해결하기 위해 add user 클릭하면 loading spinner를 add user 버튼에 만듬
  - 로딩 스켈레톤을 불러오지 않기 때문에 깜빡임 없어짐
  - fine-grained loading state로 변경


- 변경 전 userSlice의 초기 상태
```ts
interface InitialStateType {
  data: any[];
  isLoading: boolean;
  error: null | SerializedError;
}
```
- 변경 후 예시 (isLoading 분리 => fine-grained loading state)
```ts
interface InitialStateType {
  data: any[];
  isLoadingUsers: boolean;
  isCreatingUser: boolean;
  error: null | SerializedError;
}
```
- delete user 기능에도 이를 적용해야함
  - 다만, delete 관련 store state를 만들면 일이 커질 수 있음 (id를 저장하는 배열을 만들어야 할 수 있음..)
  - 그래서 UserList 하단의 개별 아이템에 삭제 기능을 구현할 것임

## 그래서.. 해결할 방법
- loadingUsers, creatingUsers 관련 state를 컴포넌트 안에 만들기
  - redux store에 넣는 대신 컴포넌트 내에서 관리하기
- 변경된 redux store의 users
```ts
{
  users: {
    data: [
      { id: 1, name: "Myra" }
    ]
  }
}
```
- 꺼낸 state는 컴포넌트 안에서 처리
```text
app
|
|
UsersList ------------
- isLoadingUsers     |
- loadingUsersError  |
- isCreatingUser     |
- creatingUserError  |
----------------------
|
|
UserListItem --------
- isDeletingUser    |
- deletingUserError |
---------------------
```
## RTK 쿼리를 활용하면 requestId 를 통해 간단히 해결 가능