const R = require('ramda');
//常用方法
const curry=R.curry;
const compose=R.compose;
const extend=function (Sub,Super) {
    const prototype=Object(Super.prototype);
    prototype.constructor=Sub;
    Sub.prototype=prototype;
};
export {curry,compose,extend};