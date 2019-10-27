import {of,ap} from "./environment/Functor";


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

export {Left,Right};