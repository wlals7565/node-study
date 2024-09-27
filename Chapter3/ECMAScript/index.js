// ECMAScript 방법으로 모듈을 가져오는 방법
// 확장자 생략하면 안됨.
import {number, string} from "./var.js"

const print = () => {
  console.log(number);
  console.log(string);
}

print();