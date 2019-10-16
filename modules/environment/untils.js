import {id,trace,curry} from "./environment";

const join = function(mma){ return mma.join(); };
const chain=curry(function (f,m) {
    return m.map(f).join();
});

const liftA2=curry(function (f,functor1,functor2) {
    return functor1.map(f).ap(functor2);
});
const liftA3=curry(function (f,functor1,functor2,functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});
const untils={join,chain,id,trace,liftA2,liftA3};
export {untils};