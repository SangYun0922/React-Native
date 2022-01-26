# WinK React-Native Study
## 내가 만들앱은?
### 간단한 채팅 어플리케이션 (ex : 카카오톡, 라인 등..)

![리액트네이티브1](https://user-images.githubusercontent.com/74143534/150121022-188d15f7-cfc3-40b0-9acb-9dc22d947f59.JPG)
![리액트네이티브2](https://user-images.githubusercontent.com/74143534/150121023-e4df2c4b-3521-4185-b48b-c2fc32428a8e.JPG)

일단 위와 같은 기능을 먼저 구현한뒤,
추후에 채팅을 이용한 간단한 끝말잇기 게임으로 확장 생각중... (ex. 끄투온라인)

![리액트네이티브3](https://user-images.githubusercontent.com/74143534/150121670-7fef1367-6108-4719-ad0c-b5bf1cec044c.JPG)

# React-Native셋업 (Mac)
## Environments
MacBook Pro : 13-inch, M1, 2020
macOS : Big Sur (11.4.version)
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
### 실행TroubleShooting
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
### iOS 실행 및 TroubleShooting
Xcode가 있다면 다음 명령만으로 프로젝트를 실행할 수 있습니다.</br>
명령은 프로젝트의 루트(TestProject/)로 이동해서 실행하셔야 합니다.(첫 빌드는 10분 이내의 시간이 약간 소요될 수 있습니다.)
```
react-native run-ios
```
만약,</br>
fatal error: 'React/RCTBridgeDelegate.h' file not found 해당 에러가 발생한다면? </br>
아래 명령어들을 순차적으로 실행시켜 줍니다.
```
brew install cocoapods
```
```
#자신이 만든 react-native 프로젝트 폴더의 하위 폴더인 ios로 이동합니다.
#해당 폴더에 Podfile이 존재하는지 확인합니다.
#존재한다면 아래 명령어를 실행합니다.
pod install
```
### Android 실행 및 TroubleShooting
**먼저, 안드로이드 기반으로 제작하기 위해서는, 안드로이드 스튜디오 설치가 우선적으로 필요합니다.**</br>
안드로이드 스튜디오 설치가 끝났다면, 안드로이드 스튜디오를 만든 프로젝트를 target으로 삼아 open해줍니다.</br>
그후, 하위폴더중 android폴더에 존재하는 build.gradle파일을 확인합니다.</br>
그중, buildscript부분을 확인해줍니다.
```
...
buildscript {
    ext {
        buildToolsVersion = "30.0.2"
        minSdkVersion = 21
        compileSdkVersion = 30
        targetSdkVersion = 30
        ndkVersion = "21.4.7075529"
    }
...
```
targetSdkVersion = 30이므로, 버전30의 sdk를 설치해주어야 합니다.</br>
mac기준으로 상단 네비게이션 바에서 Tools - Android - SDK Manager에서 API level 30버전의 안드로이드 플랫폼을 선택하여 설치해줍니다.</br>
SDK 설치가 완료되었다면, **환경변수**를 설정 해줘야합니다.
```
brew install cocoapods
```
```
#자신이 만든 react-native 프로젝트 폴더의 하위 폴더인 ios로 이동합니다.
#해당 폴더에 Podfile이 존재하는지 확인합니다.
#존재한다면 아래 명령어를 실행합니다.
pod install
```
#현재, react-native와 android 연동에서 이슈해결중...
```
...
error Failed to launch emulator. Reason: No emulators found as an output of `emulator -list-avds`.
warn Please launch an emulator manually or connect a device. Otherwise app may fail to launch.
info Installing the app...

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/skwx50000/EndTalk/android/local.properties'.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at '/Users/skwx50000/EndTalk/android/local.properties'.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s

    at makeError (/Users/skwx50000/EndTalk/node_modules/execa/index.js:174:9)
    at /Users/skwx50000/EndTalk/node_modules/execa/index.js:278:16
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async runOnAllDevices (/Users/skwx50000/EndTalk/node_modules/@react-native-community/cli-platform-android/build/commands/runAndroid/runOnAllDevices.js:109:5)
    at async Command.handleAction (/Users/skwx50000/EndTalk/node_modules/@react-native-community/cli/build/index.js:192:9)
info Run CLI with --verbose flag for more details.
```
