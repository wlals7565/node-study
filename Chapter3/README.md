모듈이란?
특정한 기능을 하는 함수나 변수들의 집합
Node에서는 모듈 형식으로 CommonJS모듈 형식과 ECMAScript모듈 형식이 있다.
사용 방법은 CommonJS폴더와 ECMAScript폴더 참고

__dirname과 __filename
CommonJS 형식의 모듈을 사용하면 __dirname을 통해 현재 js파일의 디렉토리 경로를 __filename을 통해 현재 js파일의 경로를 알아낼 수 있습니다.
ECMAScript 형식의 모듈에서는 __dirname과 __filename을 사용할 수 없고 대신에 import.meta.url을 통해 __dirname과 __filename을 알아낼 수 있습니다.

노드 내장 객체

1. global객체
브라우저의 window와 같은 노드의 전역객체입니다. 

2. console
global객체에 들어 있는 객체입니다.
보통 디버깅을 위해 사용합니다.
대표적으로 console.log가 있습니다.

3. timer
setTimeout, setInterval, setImmediate는 노드에서 global객체에 존재합니다.

4. process
process 객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있습니다.
일반적으로 운영체나 실행 환경에 따라 다르게 동작하게 만들때 사용합니다.
이 객체에서 알아둘 만한 것은 process.env, process.nextTick, process.exit가 있습니다.
순서대로 환경 변수, 이벤트 루프 함수, 프로세스 종료 함수입니다.

노드 내장 모듈
1. os
운영체제의 정보와 관련된 모듈입니다.

2. path
폴더와 파일의 경로 조작과 관련된 모듈입니다.

3. url
인터넷 주소 조작 관련 모듈

4. dns
DNS를 다룰 때 사용하는 모듈

5. crypto
암호화에 사용되는 모듈