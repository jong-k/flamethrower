## setupListeners(store.dispatch) ?
### setupListeners
아래 2가지를 가능하게 함
- refetchOnFocus
- refetchOnReconnect

콜백함수(fetch)가 실행될 4가지 경우는 아래와 같음
- onFocus
- onFocusLost
- onOffline
- onOnline


- store에서 setupListeners(store.dispatch) 형태로 설정