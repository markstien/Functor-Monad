import {of, map, isNothing, join, chain, ap} from "./environment/Functor";

const Maybe=function (x) {
    this.value=x;
};
Maybe.of=function (x) {
    return of.call(this,x);
};
Maybe.prototype.isNothing=function () {
    return isNothing.call(this);
};
Maybe.prototype.map=function (f) {
    return map.call(this,f);
};
Maybe.prototype.join=function () {
    return join.call(this);
};
Maybe.prototype.chain=function (f) {
    return chain.call(this,f);
};
Maybe.prototype.ap=function (otherContainer) {
    return ap.call(this,otherContainer);
};


export {Maybe};