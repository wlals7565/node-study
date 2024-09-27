// CommonJS 방법으로 모듈을 가져오는 방법
const {number, string} = require("./var")

const print = () => {
  console.log(number);
  console.log(string);
}

print();