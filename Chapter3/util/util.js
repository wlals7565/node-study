import util from "util";
import crypto from "crypto";

const dontUseIt = util.deprecate((x, y) => {
  console.log(x + y);
}, "don't Use this func, it is deprecated");
dontUseIt(3, 5);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
