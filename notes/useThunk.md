# thunk 에러처리하는 hooks 만들기
## 1. hooks 에서 매개변수로 받는 thunk들에 타이핑
- addUser 가 반환하는 데이터를 UserType으로 생성하고 export
  - fetchUsers 가 반환하는 데이터는 UserType[] 으로 활용 가능

## 2. useThunk hook 에서 thunk 타이핑
- Promise<> 활용
  - 일단 pass

## 3. useThunk hook 작성
- loading state, error state 작성
- dispatch import
- runThunk 함수 (UserList에서 import해서 실행할) 작성
  - dispatch 실행 및 예외 처리