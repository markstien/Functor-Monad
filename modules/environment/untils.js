import {id,trace,curry} from "./environment";
import {Left, Right} from "../Either";

const join = function(mma){ return mma.join(); };
const chain=curry(function (f,m) {
    return m.map(f).join();
});

const maybe=curry(function (x,f,m) {
    return m.isNothing()?x:f(m.value);
});
const either=curry(function (l,r,e) {
    switch (e.constructor) {
        case Left:return l(e.value);
        case Right:return r(e.value);
    }
});

const liftA2=curry(function (f,functor1,functor2) {
    return functor1.map(f).ap(functor2);
});
const liftA3=curry(function (f,functor1,functor2,functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});

const untils={maybe,either,join,chain,id,trace,liftA2,liftA3};
export {untils};