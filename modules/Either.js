import {curry} from "./environment/environment";
import {of, map, ap} from "./environment/Functor";
import {Container} from "./Container";

const Left=function (x) {
    this.value=x;
};
Left.of=function (x) {
    return of.call(this,x);
};
Left.prototype.map=function (f) {
    return this;
};

const Right=function (x) {
    this.value=x;
};
Right.of=function (x) {
    return of.call(this,x);
};
Right.prototype.map=function (f) {
    return Right.of(f(this.value));
};
Right.prototype.ap=function (otherContainer) {
    return ap.call(this,otherContainer);
};
const either=curry(function (l,r,e) {
    switch (e.constructor) {
        case Left:return l(e.value);
        case Right:return r(e.value);
    }
});
export {Left,Right,either};