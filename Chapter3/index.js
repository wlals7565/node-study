
const helloNode = () => {
  console.log(`Hello Node!`);
}

const helloWorld = () => {
  console.log(`Hello World!`);
  helloNode();
}
helloWorld();
