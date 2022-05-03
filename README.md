# Basic React Study
## 내가 만들앱은?
### 간단한 웹 블로그


일단 게시판 등록, 게시글 등록등의 기초적인 기능을 구현해보았다.
react-router-dom과 서버는 임시로 json-server를 사용하여, json형식으로 데이터를 저장해두는 공간으로 사용해보았다.

추후에 디자인을 더 손봐야할듯,,,

# React 셋업 (Mac)
## Environments
MacBook Pro : 13-inch, M1, 2020
macOS : Big Sur (11.4.version)
### Dependancy

git clone을 하셔서, server, client 폴더 각각에서 npm install을 꼭 해주세요!
그 후, npm run (scripts에 정의된 명령어) 를 실행시켜주면 OK

⬇️(client)package.json⬇️
```
...
  "dependencies": {
    "@reduxjs/toolkit": "^1.5.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "json-server": "^0.16.3",
    "query-string": "^7.0.0",
    "ramda": "^0.27.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.3",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.3.5",
    "web-vitals": "^1.0.1"
  }
...
```

⬇️(server)package.json⬇️
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "starts": "json-server --watch board.json --port 4000"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.17.0"
  }
}

```
### Reference
[[React][CRUD] 게시판 만들기 All in One](https://binaryjourney.tistory.com/49)
