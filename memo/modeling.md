# store modeling
## 1. 비정규화 vs 정규화
### 1.1. 비정규화
- 예시
```js
[
  {
    id: 50,
    name: "Park",
    albums: [
      { id: 1, title: "Album #1" },
      { id: 2, title: "Album #2" }
    ]
  },
  {
    id: 51,
    name: "Lee",
    albums: [
      { id: 3, title: "Album #3" },
      { id: 4, title: "Album #4" }
    ]
  }
]
```

- 필요한 데이터를 쓰기 쉬움
- 프로젝트가 더 이상 바뀌지 않을 때만 유용 (확장 힘듬)

### 1.2. 정규화 db
- 예시
```js
// List of Albums
[
  { id: 1, title: "Album #1", userId: 50 },
  { id: 2, title: "Album #2", userId: 50 },
  { id: 3, title: "Album #3", userId: 51 },
  { id: 4, title: "Album #4", userId: 51 },
]

// List of Users
[
  { id: 50, name: "Park" },
  { id: 51, name: "Lee" }
  ]
```

- 유연한 구조, 중복된 코드도 줄어듬, 직관적
- 구현 난이도가 올라감