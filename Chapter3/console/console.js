const string = "가나다라마바사";
const number = "1234546";
const boolean = true;
const obj = {
  person: {
    age: 18,
    name: {
      korean: '이정훈',
      english: 'LEE JEONG HUN'
    }
  },
};
console.time("whole time");
console.log("--------------------");
console.log(string, number, boolean);
console.error("use error instead of log for error");

console.table([
  { name: "YJM", birth: 2009 },
  { name: "IJH", birth: 1999 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("time measure");
for (let i = 0; i < 10000; i++) {}
console.timeEnd("time measure");

function b() {
  console.trace('error postion')
}
function a() {
  b();
}
a();

console.timeEnd("whole time")