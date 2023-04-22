## NextJS Introduction
1. NextJS는 SSR(ServerSideRendering) 기반으로 동작
2. pages 내부에 위치하는 파일 이름이 곧 경로

### CSS 적용 방법은 총 3가지
1. css module
2. styled-jsx
3. styled-jsx global

### next.config.js 활용하여 redirect, rewrite 하는 방법

### server-side-rendering 하는 방법(데이터를 불러온 후 화면 생성)

### url 경로 사용 방법
1. 폴더로 경로 구분(index.js, ~~~)\
2. url에 변수 넣는 방법([변수명].js)

### url 조작 방법(router 활용)
1. Link에 pathName, query, as 등을 사용하여 url 조작 및 router.query로 값 넘기기
2. router.push를 사용하여 url 조작 및 router.query로 값 넘기기