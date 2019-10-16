const R = require('ramda');
//常用方法
const curry=R.curry;
const compose=R.compose;

const trace=R.curry(function (tag,x) {
    console.log(tag,x);
    return x;
});
const id=function (x) {
    return x;
};
export {curry,compose,id,trace};