# WinK React-Native Study
## 내가 만들앱은?
### 간단한 채팅 어플리케이션 (ex : 카카오톡, 라인 등..)

![리액트네이티브1](https://user-images.githubusercontent.com/74143534/150121022-188d15f7-cfc3-40b0-9acb-9dc22d947f59.JPG)
![리액트네이티브2](https://user-images.githubusercontent.com/74143534/150121023-e4df2c4b-3521-4185-b48b-c2fc32428a8e.JPG)

일단 위와 같은 기능을 먼저 구현한뒤,
추후에 채팅을 이용한 간단한 끝말잇기 게임으로 확장 생각중... (ex. 끄투온라인)

![리액트네이티브3](https://user-images.githubusercontent.com/74143534/150121670-7fef1367-6108-4719-ad0c-b5bf1cec044c.JPG)

# React-Native셋업 (Mac)
### 1.Xcode 명령줄 도구 설치
Homebrew에는 Apple Xcode의 Xcode 명령줄 도구가 필요합니다.
```
xcode-select --install
```
### 2.Homebrew 설치
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
### 3.Nodejs 설치
react-native는 Javascript이므로 Javascript의 런타임인 Nodejs가 필요합니다.
```
brew install node
```
### 4.Watchman 설치
Watchman은 특정 폴더나 파일을 감시하다가 변화가 생기면, 특정 동작을 실행하도록 설정하는 역할을 합니다. react-native에서는 소스코드의 추가, 변경이 발생하면 다시 빌드하기 위해 Watchman을 사용하고 있습니다.
```
brew install watchman
```
### 5.React-Native-cli 설치
```
 npm install -g react-native-cli
```
### 6.React-Native 프로젝트 생성
```
 react-native init [생성 할 프로젝트 명]
```
### TroubleShooting
만약 react-native init [생성 할 프로젝트 명]를 입력해도, </br>
zsh: command not found: react-native </br>
위와 같은 명령어가 발생한다면?
```
npm bin -g #먼저 자신의 글로벌 패스를 찾는다.
```
```
export PATH=${PATH}:[글로벌 패스] #글로벌 패스를 아래 코드처럼 터미널창에 붙여넣으면 된다.

```
이래도 해결이 안된다면?
```
sudo npm install -g [library-name] #앞에 sudo를 붙이자.

```
