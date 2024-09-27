import path from 'path'

const __filename = import.meta.url;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('------------------------------');
console.log('path.dirname(): ', path.dirname(__filename));
console.log('path.extname(): ', path.extname(__filename));
console.log('path.basename(): ', path.basename(__filename));
console.log('path.basename - extname', path.basename(__filename, path.extname(__filename)));
console.log('------------------------------');
console.log('path.parse()', path.parse(__filename));
console.log('path.format(): ', path.format({
  dir: 'C:\\users\\IJH',
  name: 'path',
  ext: 'js'
}))
console.log('path.normalize(): ', path.normalize('C://users\\\\IJH\\\path.js'))
console.log('------------------------------');
console.log('path.isAbsolute(C\\): ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home): ', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative(): ', path.relative('C:\\users\\IJH\\path.js', 'C;\\'));
console.log('path.join(): ', path.join( path.dirname(__filename), '..', '..', '/users', '.', '/IJH'));
console.log('path.resolve(): ', path.resolve( path.dirname(__filename), '..', '/users', '.', '/IJH'));
