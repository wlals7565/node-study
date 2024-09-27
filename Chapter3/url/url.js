import url from 'node:url'
const myURL = new URL('http://example.co.kr/examples?number=5#anchor')
console.log('new URL():', myURL);
console.log('url.format()', url.format(myURL));
