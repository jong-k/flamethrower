# Async Thunk Function
## 1. 흐름
```text
1) action type : pending

              데이터가 로딩되는 동안
              자동으로 action을 distpatch
                    /\
                    ||    
request 시작 -> async thunk -> action (pending) ->  redux store|dispatch -> reducers -> 빈 데이터 
    ||
    || - request success
    \/

2) action type : fulfilled


response 시작 -> async thunk -> action (fulfilled) -> redux store|dispatch -> reducers -> 데이터

```