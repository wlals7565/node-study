const number = 123456;
const string = "가나다라마바사";

// CommonJS 형식으로 모듈을 내보내는 방법
module.exports = { number, string }

// 참고 사항
// exports.[객체] = ... 형태는 가능한 사용하지 말 것
// 사용하게 된다면 module.exports형식과 같이 사용하지 말 것